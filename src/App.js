import React, {useState} from 'react';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles((theme) =>({
  modal:{
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    //padding: theme.spacing(2,4,3,4),
    padding: "16px 32px 24px",
    //esto es para centrar
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',


  },

  textfield:{
    width: '100%',

    button:{
      textAlign: 'center'
    }

  }


}))




function App() {
 
 const styles=useStyles();

 const [modal, SetModal]=useState(false);

 const abrirCerrarModal = () => {
  SetModal(!modal);

 }

 
 const body=(
  <div className={styles.modal}>

<div align="center"> 
  <h2>Formulario</h2>
</div>

  <TextField label="Nombre" className={styles.textfield} />
  <br />
  <TextField label="Apellidos" className={styles.textfield} />
  <br />
  <TextField label="Correo Electronico" className={styles.textfield} />
  <br /><br />
<div align="right">
<Button color="primary">Enviar</Button>
<Button onClick={() => abrirCerrarModal()}>Cancelar</Button>

</div>


</div>


 )
 
 
  return (
    <div className="App">
        <Button className={styles.button} onClick={() => abrirCerrarModal()}>Abrir Modal</Button>

      <Modal
      open={modal}
      onClose={abrirCerrarModal}>
        {body}
      </Modal>
      
    </div>
  );
}

export default App;
