import * as React from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router';

//Imports do material UI Card
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

//Imports do react-icons
import { MdModeEdit, MdDelete } from "react-icons/md";

//Imports de componentes
import ModalConfirm from './ModalConfirm.jsx'

export default function CustomerCard({ name, lastname, email, avatar, onRemoveCustomer, id }) {
  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  console.log(handleToggleOpenModal)

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar src={avatar} aria-label="recipe" />
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <NavLink to={`/customers/edit/${id}`}>
            <IconButton aria-label="edit">
              <MdModeEdit />
            </IconButton>
          </NavLink>
          <IconButton aria-label="delete" onClick={handleRemoveCustomer}>
            <MdDelete />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm open={openModal} onClose={handleToggleOpenModal} onConfirm={() => handleConfirmModal(id)} title={'Deseja realmente excluir esse cadastro?'} message={"Ao confirmar, não será possível reverter essa operação"} />
    </>
  );
}