import logo from '../assets/descub_logo.svg'

function DescubLogin(){
    return (
        <body className='body-login'>

            <div className='container con w-75 mt-5 rounded shadow'>
            
                <div className='row'>
                    <div className='col log rounded'>
                        <h2 className='fw-bold text-center py-5'>User Login</h2>
                        <form action="#">
                            <div className='mb-4'>
                                <label htmlFor="email" form='form-label'>E-mail</label>
                                <input type="email" className='form-control' name='email'/>
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="password" form='form-label'>Contraseña</label>
                                <input type="password" className='form-control' name='password'/>
                            </div>

                            <div className='mb-4 form-check'>
                                <input type="checkbox" name='connected' className='form-check-input'/>
                                <label htmlFor="connected" className='form-check-label'>Mantener sesión inciada</label>
                            </div>

                            <div className="d-grid">
                                <button type='submit' className='btm btn-primary'>Iniciar Sesion</button>
                            </div>
                        </form>
                    </div>

                    <div className='col bg rounded'>
                        <img src={logo} alt="descub_logo" className='ImgLogin' />
                    </div>

                </div>
            </div>
            
        </body>

    );
}
export default DescubLogin
