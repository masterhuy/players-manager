import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";

export default function Edit({ closeEditModal, dataEdit, updatePlayer }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // const [dataChange, setDataChange] = useState({})

    // const handleChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setDataChange(values => ({...values, [name]:value}))
    //     console.log(dataChange);
    // }

    const handleSave = (data) => {
        updatePlayer(data, dataEdit.id)
    }

    return (
        <div id="editEmployeeModal" className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(handleSave)}>
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Player</h4>
                            <button type="button" className="close" onClick={closeEditModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" defaultValue={dataEdit.name} name="name" {...register("name", { required: true, maxLength: 20 })}/>
                                {errors?.name?.type === "required" && <p>This field is required</p>}
                                {errors?.name?.type === "maxLength" && (
                                    <p>Name cannot exceed 20 characters</p>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <input type="text" className="form-control" defaultValue={dataEdit.age} name="age" {...register("age", {required: true, min: 18, max: 99 })} />
                                {errors?.age?.type === "required" && <p>This field is required</p>}
                                {errors.age && (
                                    <p>Age must be older then 18 and younger then 99 years old</p>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Club</label>
                                <input type="text" className="form-control" defaultValue={dataEdit.club} name="club" {...register("club", { required: true})} />
                                {errors?.club?.type === "required" && <p>This field is required</p>}
                            </div>
                            <div className="form-group">
                                <label>Position</label>
                                <select 
                                    name="position" 
                                    defaultValue={dataEdit.position}
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
                            <button type="button" className="btn btn-default" onClick={closeEditModal}>Cancel</button>
                            <button type="submit" className="btn btn-info">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
