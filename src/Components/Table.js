import React from 'react'

export default function Table({players, deletePlayer, getPlayerEdit}) {

    const getDataEdit = (id) => {
        getPlayerEdit(id)
    }
    
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player) => {
                        return <tr key={player.id}>
                                    <td>{player.id}</td>
                                    <td>{player.name}</td>
                                    <td>{player.age}</td>
                                    <td>{player.club}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        <a className="edit" onClick={() => getDataEdit(player.id)}>
                                            <i className="material-icons" title="Edit"></i>
                                        </a>
                                        <a className="delete" onClick={() => deletePlayer(player.id)}>
                                            <i className="material-icons" title="Delete"></i>
                                        </a>
                                    </td>
                                </tr>
                    })
                }
                
            </tbody>
        </table>
    )
}
