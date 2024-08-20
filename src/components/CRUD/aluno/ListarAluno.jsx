import alunos from "../data/db_aluno";
import "../css/crud.css";

const ListarAluno = () => {
  const corpoTabela = () => {
    const novoArray = alunos.map(
      ({ id, nome, curso, cidade }, index) => {
        return (
          <tr key={index}>
            <th scope="row">{id}</th>
            <td>{nome}</td>
            <td>{curso}</td>
            <td>{cidade}</td>
          </tr>
        ); //return de cada elemento como um JSX
      } //funcao arrow
    ); //map
    return novoArray;
  };

  return (
    <div className="page-content">
      <h1>Listar Alunos</h1>
      <table className="table table-striped table-content">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Cidade</th>
          </tr>
        </thead>
        <tbody>{corpoTabela()}</tbody>
      </table>
    </div>
  );
};

export default ListarAluno;