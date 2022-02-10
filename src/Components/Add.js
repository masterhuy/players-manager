import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";

export default function Add({ closeAddModal, addPlayer }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // const [dataAdd, setDataAdd] = useState({})

    // const handleChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setDataAdd(values => ({...values, [name]:value}))
    // }

    const handleAdd = (data) => {
        addPlayer(data)
        // addPlayer(dataAdd)
    }

    console.log("render add");
    
    return (
        <div id="addEmployeeModal" className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(handleAdd)}>
                        <div className="modal-header">
                            <h4 className="modal-title">Add Player</h4>
                            <button type="button" className="close" onClick={closeAddModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Enter name" className="form-control" name="name" {...register("name", { required: true, maxLength: 20 })}/>
                                {errors?.name?.type === "required" && <p>This field is required</p>}
                                {errors?.name?.type === "maxLength" && (
                                    <p>Name cannot exceed 20 characters</p>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <input type="text" placeholder="Enter age" className="form-control" name="age" {...register("age", {required: true, min: 18, max: 99 })} />
                                {errors?.age?.type === "required" && <p>This field is required</p>}
                                {errors.age && (
                                    <p>Age must be older then 18 and younger then 99 years old</p>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Club</label>
                                <input type="text" placeholder="Enter club" className="form-control" name="club" {...register("club", { required: true})} />
                                {errors?.club?.type === "required" && <p>This field is required</p>}
                            </div>
                            <div className="form-group">
                                <label>Position</label>
                                <select 
                                    name="position" 
                                    className="form-control" 
                                    id="exampleFormControlSelect2" 
                                    {...register("position", { required: true})}
                                >
                                    <option value="">Choose position</option>
                                    <option value="Attacker">Attacker</option>
                                    <option value="Midfielder">Midfielder</option>
                                    <option value="Defender">Defender</option>
                                    <option value="Goalkeeper">Goalkeeper</option>
                                </select> 
                                {errors?.position?.type === "required" && <p>This field is required</p>}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={closeAddModal}>Cancel</button>
                            <button type="submit" className="btn btn-info">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
