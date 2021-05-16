import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import Timer from 'react-compound-timer'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { saveTask, getTasks, saveSubTask, getSubTasks, editSubTask } from "../actions/task";

/**
 * require validation
 * @param {*} value 
 */
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TaskList = (props) => {
    var subtitle;
    const { user: currentUser } = useSelector((state) => state.auth);
    const checkBtn = useRef();
    const checkBtn1 = useRef();
    const form = useRef();
    const form1 = useRef();
    const [name, setName] = useState("");
    const [dateAndTime, setDateAndTime] = useState(new Date());
    const [taskName, setTaskName] = useState("");
    const [isDisplayMessage, setIsDisplayMessage] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [subTaskName, setSubTaskName] = useState("");
    const [subTaskDateAndTime, setSubTaskDateAndTime] = useState(new Date());
    const [subTaskTaskName, setSubTaskTaskName] = useState("");
    const [taskData, setTaskData] = useState({});
    const [subTaskData, setSubTaskData] = useState({});
    const [isEditSubTask, setIsEditSubTask] = useState(false);

    const [loading, setLoading] = useState(false);

    const { message } = useSelector(state => state.message);
    const { taskList } = useSelector(state => {
        return state.task
    });

    const { subTaskList } = useSelector(state => {
        return state.task
    });


    const dispatch = useDispatch();



    /**
     * form submit hendle
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            let setData = {
                name,
                dateAndTime,
                taskName
            }
            //console.log("setData ==>", setData)
            dispatch(saveTask(setData))
                .then(() => {
                    // props.history.push("/tasklist");
                    // window.location.reload();
                    setName("")
                    setDateAndTime(new Date())
                    setTaskName("")
                    setLoading(false);
                    setIsDisplayMessage(true);
                    dispatch(getTasks())
                    setTimeout(() => {
                        setIsDisplayMessage(false);
                    }, 2000);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    const openModal = (task) => {
        setIsOpen(true);
        setTaskData(task)
        setIsEditSubTask(false)
        setSubTaskName("");
        setSubTaskDateAndTime(new Date())
        setSubTaskTaskName("")
    }

    const openEditModal = (subtask) => {
        setIsOpen(true);
        setSubTaskData(subtask)
        setIsEditSubTask(true)
        setSubTaskName(subtask.name);
        setSubTaskDateAndTime(new Date(subtask.dateAndTime))
        setSubTaskTaskName(subtask.taskName)
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#000';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSubmitSubTask = (e) => {
        e.preventDefault();
        form1.current.validateAll();
        if (checkBtn1.current.context._errors.length === 0) {
            if (!isEditSubTask) {
                let setSubTaskData = {
                    name: subTaskName,
                    dateAndTime: subTaskDateAndTime,
                    taskName: subTaskTaskName,
                    taskId: taskData.id
                }
                dispatch(saveSubTask(setSubTaskData))
                    .then(() => {
                        setTaskData({});
                        closeModal();
                        setSubTaskName("");
                        setSubTaskDateAndTime(new Date())
                        setSubTaskTaskName("")
                        dispatch(getSubTasks())

                    })
                    .catch(() => {
                        setLoading(false);
                    });
            } else {
                let updateSubTaskData = {
                    name: subTaskName,
                    dateAndTime: subTaskDateAndTime,
                    taskName: subTaskTaskName,
                    taskId: subTaskData.taskId,
                    id: subTaskData.id,
                }
                updateSubTask(updateSubTaskData)

            }
            //console.log("setSubTaskData ==>", setSubTaskData)
        } else {
            //closeModal()
        }
    }

    const updateSubTask = (updateSubTaskData) => {
        dispatch(editSubTask(updateSubTaskData))
            .then(() => {
                setTaskData({});
                closeModal();
                setSubTaskName("");
                setSubTaskDateAndTime(new Date())
                setSubTaskTaskName("")
                dispatch(getSubTasks())

            })
            .catch(() => {
                setLoading(false);
            });
    }

    const clickOnComplete = (subtask) => {
        let updateSubTaskData = {
            isComplete: true,
            id: subtask.id,
        }
        updateSubTask(updateSubTaskData)
    }

    const clickOnDelete = (subtask) => {
        let updateSubTaskData = {
            isDelete: true,
            id: subtask.id,
        }
        updateSubTask(updateSubTaskData)
    }


    /**
     * get list of tasks
     */
    useEffect(() => {
        if (!taskList) {
            dispatch(getTasks())
                .then(() => {
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            return null
        }
    }, [taskList]);

    /**
     * get list of tasks
     */
    useEffect(() => {
        if (!subTaskList) {
            dispatch(getSubTasks())
                .then(() => {
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            return null
        }
    }, [subTaskList]);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <div className="col-md-12">
                <div className="card card-container">
                    <Form onSubmit={handleSubmit} ref={form}>
                        <h3 className="text-uppercase"> Create task</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name </label>
                            <Input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateAndTime">Date & Time</label>
                            <DateTimePicker
                                onChange={setDateAndTime}
                                value={dateAndTime}
                                validations={[required]}
                                className="form-control"
                                name="dateAndTime"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="taskName">Task Name</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="taskName"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Submit</span>
                            </button>
                        </div>

                        {isDisplayMessage && message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Task Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList && taskList.map((task, index) => {
                        return (
                            <>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{task.name}</td>
                                    <td>{task.dateAndTime}</td>
                                    <td>{task.taskName}</td>
                                    <td>
                                        <button className="btn btn-primary btn-block" onClick={() => openModal(task)}>
                                            Create Sub Task
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td colspan="4">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date & Time</th>
                                            <th scope="col">Task Name</th>
                                            <th scope="col">Timer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        {subTaskList && subTaskList.map((subtask, jindex) => {
                                            console.log("subtask ==>", subtask);
                                            if (subtask.taskId === task.id) {
                                                return (
                                                    <tr style={subtask.isDelete ? { backgroundColor: 'red' } : subtask.isComplete ? { backgroundColor: 'green' } : {}}>
                                                        <th scope="row">###</th>
                                                        <td>{subtask.name}</td>
                                                        <td>{subtask.dateAndTime}</td>
                                                        <td>{subtask.taskName}</td>
                                                        <td>
                                                            <Timer
                                                                initialTime={0}
                                                                startImmediately={false}
                                                                onStart={() => console.log('onStart hook')}
                                                                onResume={() => console.log('onResume hook')}
                                                                onPause={() => console.log('onPause hook')}
                                                                onStop={() => console.log('onStop hook')}
                                                                onReset={() => console.log('onReset hook')}
                                                            >
                                                                {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
                                                                    <React.Fragment>
                                                                        <div>
                                                                            <Timer.Days /> d:
                                                                            <Timer.Hours /> h:
                                                                            <Timer.Minutes /> m:
                                                                            <Timer.Seconds /> s
                                                                        </div>
                                                                        <div>
                                                                            <button className="btn btn-primary btn-block" onClick={start}>Start</button>
                                                                            {/* <button onClick={pause}>Pause</button>
                                                                            <button onClick={resume}>Resume</button> */}
                                                                            <button className="btn btn-primary btn-block" onClick={stop}>Stop</button>
                                                                            {/* <button onClick={reset}>Reset</button> */}
                                                                        </div>
                                                                    </React.Fragment>
                                                                )}
                                                            </Timer>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-block" onClick={() => clickOnComplete(subtask)}>
                                                                Complete
                                                            </button>
                                                            <button className="btn btn-primary btn-block" onClick={() => openEditModal(subtask)}>
                                                                Edit
                                                            </button>
                                                            <button className="btn btn-primary btn-block" onClick={() => clickOnComplete(subtask)}>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            } else {
                                                return
                                            }
                                        })}
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Create SubTask</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div> */}
                <div className="modal-content">
                    <Form onSubmit={handleSubmitSubTask} ref={form1}>
                        <div className="modal-header">
                            {!isEditSubTask &&
                                <h5 className="modal-title text-uppercase" ref={_subtitle => (subtitle = _subtitle)}>Create {taskData.taskName} 's sub task</h5>
                            }
                            {isEditSubTask &&
                                <h5 className="modal-title text-uppercase" ref={_subtitle => (subtitle = _subtitle)}>Edit {subTaskData.taskName}</h5>
                            }
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="subTaskName">Name </label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="subTaskName"
                                    value={subTaskName}
                                    onChange={(e) => setSubTaskName(e.target.value)}
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Date & Time</label>
                                <DateTimePicker
                                    onChange={setSubTaskDateAndTime}
                                    value={subTaskDateAndTime}
                                    validations={[required]}
                                    className="form-control"
                                    name="dateAndTime"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subTaskTaskName">Task Name </label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="subTaskTaskName"
                                    value={subTaskTaskName}
                                    onChange={(e) => setSubTaskTaskName(e.target.value)}
                                    validations={[required]}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                            {!isEditSubTask &&
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            }
                            {isEditSubTask &&
                                <button type="submit" className="btn btn-primary">Edit changes</button>
                            }
                        </div>
                        <CheckButton style={{ display: "none" }} ref={checkBtn1} />
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default TaskList;