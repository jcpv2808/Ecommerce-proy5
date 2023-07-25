import { useNavigate } from "react-router-dom";
import { ApiWebURL } from "../utils/index"

export default function Login({ onLogin, isAuthenticated}) {

    const navigate = useNavigate();

    const iniciarSesion = async(event) => {
        event.preventDefault();
        const dataform = new FormData(event.currentTarget);

        const rutaServicio = ApiWebURL + "iniciarsesion.php";
        let formData = new FormData();
        formData.append("usuario", dataform.get("usuario"));
        formData.append("clave", dataform.get("clave"));

        const response = await fetch(rutaServicio, { method: "POST", body: formData });
        const result = await response.json();
        switch (result) {
            case -1:
                alert("El usuario no está registrado");
                break;
            case -2:
                alert("La contraseña es incorrecta");
                break;
            default:
                alert("Bienvenido");
                onLogin(result);
                navigate("/escritorio",{replace:true})
                break;
        }
        if (isAuthenticated) {
            navigate("/");
        }
        /*
                fetch(rutaServicio, {
                    method: "POST",
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
        */
    }

    return (
        <section className='padded'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2 className="text-center">Iniciar Sesion</h2>
                        <form onSubmit={(event) => iniciarSesion(event)}>
                            <div className="mb-2">
                                <input type="text" className="form-control" required
                                    name="usuario" placeholder="usuario" />
                            </div>
                            <div className="mb-2">
                                <input type="password" className="form-control" id="txtClave" required
                                    name="clave" placeholder="contraseña" />
                                <input type="checkbox" className="form-chech-input"
                                    onClick={(event) => document.getElementById("txtClave").setAttribute("type",
                                        event.target.checked ? "text" : "password")} />
                                <label className="form-check-label" >&nbsp;Mostrar Contraseña</label>
                            </div>
                            <div className="mb-2">
                                <button type="summit" className="btn btn-primary btn-block w-100">Iniciar Sesion &gt;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
