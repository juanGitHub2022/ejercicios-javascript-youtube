function recogerDatos(){

    let form = document.forms["myform"]

    let nombreCliente = form.nombre_cliente.value;
    let telefonoCliente = form.telefono_cliente.value;
    let emailCliente = form.email_cliente.value;

    let sabor = form.sabor.value;

    let recipiente = form.recipiente.value

    let extras = document.getElementsByName("extras[]")

    


    let mensajeFinal = "El cliente con nombre: " + nombreCliente+
                        ", telefono: "+ telefonoCliente+
                        ", e-mail: "+ emailCliente+
                        ", ha elegido helado con el sabor "+ sabor+
                        ", en un recipiente de: "+recipiente+
                        "con los siguientes extras: ";

    for( let i=0; i<extras.length; i++){
        const element = extras[i];

        if(element.checked){
            mensajeFinal+= element.value + ", ";
        }

        
    }

    console.log(mensajeFinal);
}
