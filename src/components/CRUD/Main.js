import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";
import ListarAluno from "./aluno/ListarAluno";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children: [
            {
                path:"professores/criar",
                element:<CriarProfessor />
            },
            {
                path:"professores/listar",
                element:<ListarProfessor />
            },
            {
                path:"professores/editar",
                element:<EditarProfessor />
            },
            {
                path: "alunos/listar",
                element: <ListarAluno />
            }
        ]
    }
])

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main