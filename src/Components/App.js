import axios from 'axios';
import { useEffect, useState } from 'react';
import './../App.css';
import Add from './Add';
import Edit from './Edit';
import Table from './Table';

function App() {
    const [players, setPlayers] = useState([])
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [dataEdit, setDataEdit] = useState({})

    useEffect(() => {
        const getPlayer = async () => {
            const res = await axios.get(`https://61a740ac387ab200171d2b56.mockapi.io/players`)
            setPlayers(res.data)
        }
        getPlayer()
    },[])

    const getPlayers = () => {
        axios.get(`https://61a740ac387ab200171d2b56.mockapi.io/players`).then(res => setPlayers(res.data))
    }

    const addPlayer = (data) => {
        axios.post(`https://61a740ac387ab200171d2b56.mockapi.io/players`,{
            name: data.name,
            age: data.age,
            club: data.club,
            position: data.position
        }).then(res => setPlayers([...players, res.data]))
        setAddModal(false)
    }

    const deletePlayer = (id) => {
        axios.delete(`https://61a740ac387ab200171d2b56.mockapi.io/players/${id}`)
            .then(res => { 
                //console.log(res.data);
                let playersArr = players.filter(x => x.id !== id)
                setPlayers([...playersArr])
            })
    }

    const updatePlayer = (data, id) => {
        axios.put(`https://61a740ac387ab200171d2b56.mockapi.io/players/${id}`,{
            name: data.name,
            age: data.age,
            club: data.club,
            position: data.position
        }).then(() => getPlayers())

        setEditModal(false)
    }

    const getPlayerEdit = (id) => {
        setEditModal(true)
        let data = players.filter(player => player.id === id)
        setDataEdit({...data[0]})
    }

   
    return (
        <div className="container">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage Football Players with mockapi</h2>
                        </div>
                        <div className="col-sm-6">
                            <a className="btn btn-success" onClick={() => setAddModal(true)}>
                                <i className="material-icons"></i> 
                                <span>Add New Player</span>
                            </a>
                        </div>
                    </div>
                </div>

                <Table players={players} deletePlayer={(id) => deletePlayer(id)} getPlayerEdit={(id) => getPlayerEdit(id)}/>
                
                {addModal && <Add closeAddModal={() => setAddModal(false)} addPlayer={(data) => addPlayer(data)}/>}
                {editModal && <Edit closeEditModal={() => setEditModal(false)} dataEdit={dataEdit} updatePlayer={(data, id) => updatePlayer(data, id)} />}
            </div>
        </div>
    );
}

export default App;
