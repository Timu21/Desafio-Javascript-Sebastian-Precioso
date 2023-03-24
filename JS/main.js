// Pre Entrega 1

let numeroSocio=23001;
let opcion=prompt("Bienvenido, te querés hacer socio del Club San Martin? \n1- Si. \n2- No.");


switch (opcion){
    case "2":
        alert("Muchas gracias por visitarnos");        
        break;
    case "1":
        alert("Por favor completa la siguiente informacion");        
        
        function Socio(nombre, apellido, fechaNacimiento, DNI, direccion, ciudad, email, telefono, tarjetaNumero, tarjetaBanco, tarjetaPIN){
            this.nombre=nombre;
            this.apellido=apellido;
            this.diaNacimiento=diaNacimiento;
            this.mesNacimiento=mesNacimiento;
            this.anioNacimiento=anioNacimiento
            this.DNI=DNI;
            this.direccion=direccion;
            this.ciudad=ciudad;
            this.email=email;
            this.telefono=telefono;
            this.tarjetaNumero=tarjetaNumero;
            this.tarjetaBanco=tarjetaBanco;
            this.tarjetaPIN=tarjetaPIN;
                    
            };
        
            let nombre = prompt("Ingresa tu nombre");
            let apellido = prompt("Ingresa tu apellido");
            let diaNacimiento = parseInt( prompt("Ingresa solo dos digitos el dia de tu nacimiento"));
            let mesNacimiento = parseInt( prompt("Ingresa solo dos digitos el mes de tu nacimiento"));
            let anioNacimiento = parseInt( prompt("Ingresa los cuatro digitos del año de tu nacimiento"));
            let DNI = prompt("Ingresa tu DNI");
            let direccion = prompt("Ingresa tu direccion");
            let ciudad = prompt("Ingresa tu ciudad");
            let email = prompt("Ingresa tu email");
            let telefono = prompt("ingresa tu telefono");
            let tarjetaNumero = prompt("ingresa el numero de tu tarjeta de credito");
            let tarjetaBanco = prompt("ingresa tu banco");
            let tarjetaPIN = prompt("ingresa el PIN de tu tarjeta");

            alert("Felicitaciones " +  nombre + " tu numero de socio es " + parseInt(numeroSocio+1));
            let anioActual = 2023;
            let resultado = anioActual - anioNacimiento;
            console.log(resultado + " años");

            if (resultado >= 19) {
                console.log("Pertenece al Plantel Superior");
                
            }
            if (resultado < 19 & 2023 - resultado > 14){
                console.log("Pertenece a Juveniles");
            }else{
                ("Pertenece a infantiles")
            }
            
        const socio=new Socio(nombre, apellido, diaNacimiento - mesNacimiento - anioNacimiento , DNI, direccion, ciudad, email, telefono, tarjetaNumero, tarjetaBanco, tarjetaPIN)
        
        console.table(socio);
        break;


        default:
            alert("ingreso no valido");
            break;  
        } 

