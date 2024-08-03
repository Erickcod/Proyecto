import React, {useState} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import { BasicModal } from '../../../comoponents/shared';
import { UserFrom } from '../../../comoponents/Admin/Users';
import "./Users.scss"

export function  Users () {

    const [showModal, setShowModal] = useState(false)
    
    const onOpneCloseModal = () => setShowModal((prevState) => !prevState)

    const panes =[
        {
            menuItem: "Usuarios Activos",
            render: () =>(
                <Tab.Pane attached = {false}>
                    <h2>Ususarios Activos</h2>
                </Tab.Pane>
            )
        },
        {
            menuItem: "Usuarios Inactivos",
            render: () =>(
                <Tab.Pane attached = {false}>
                    <h2>Usuarios Inactivos</h2>
                </Tab.Pane>
            )
        },
    ]
    return (
        <>

        <div className='users-page'>
            <Button className='users-page__add' primary onClick={onOpneCloseModal}>
                Nuevo ususario
            </Button>
            <Tab menu={{secondary:true}} panes={panes} />
        </div>

        <BasicModal show={showModal} close={onOpneCloseModal} title="Crear nuevo ususario">
            <UserFrom close={onOpneCloseModal} />
        </BasicModal>

     </>
    )
}


