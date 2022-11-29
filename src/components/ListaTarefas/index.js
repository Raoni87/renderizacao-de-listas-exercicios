import { useState, KeyboardEvent } from "react";
import {
  InputContainer,
  InputConcluidoContainer,
  ListaContainer,
  ListaTarefasContainer,
  ListaConcluidaContainer,
  Tarefa,
  TarefaConcluida,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };


  const enterTarefa =(evento) => {
    if(evento.key === 'Enter') {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  }

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput onKeyPress={enterTarefa}
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <InputConcluidoContainer>TAREFAS JÁ CONCLUÍDAS</InputConcluidoContainer>
      <ListaConcluidaContainer>
        <ul>
          {lista.map((item) => {
            return (
              <TarefaConcluida>
                <p>{item}</p>
              </TarefaConcluida>
            );
          })}
        </ul>
      </ListaConcluidaContainer>
    </ListaTarefasContainer>
  );
}

