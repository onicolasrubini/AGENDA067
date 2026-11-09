 function Login() {
    return (
        <>
            <div className="flex flex-col h-screen bg-slate-600">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="bg-gray-100 h-120 w-100 p-6 rounded-lg shadow-lg flex flex-col justify-center ">
                    
                    <p className="font-bold text-3xl text-black text-center">login.</p>
                    
                    <div>
                        <h3 className="text-black p-1 mt-11">Email</h3>
                        <input type="email" className=" text-black border p-1 rounded w-full" placeholder="usuario@email.com"/>
                    </div>

                    <div>
                        <h3 className="text-black p-1 mt-4">Senha</h3>
                        <input type="password" className=" text-black border p-1 rounded w-full" placeholder="digite sua senha"/>
                    </div>

                    <a href="#"><button className="bg-purple-600 text-white p-2 rounded mt-6 w-full cursor-pointer">Entrar</button></a>

                    {/* <Link
                        to="/"
                        className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:border-purple-600 hover:text-purple-600"
                    >Entrar</Link> */}

                    <div className="flex justify-center items-center mt-2">
                        <p className="text-gray-600 text-xs">Ainda não tem uma conta?</p>
                        <a href="#" className="text-purple-600 text-xs">Cadastre-se</a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Login;