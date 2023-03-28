// @ts-nocheck
import axios from "axios";
import * as SQLite from "expo-sqlite";

import React,{useState} from 'react'

const db = SQLite.openDatabase("xp.db");
export const init = () => {
  criarTabelas();
};
function create_table(tabela, sql) {
  var query = sql;
  try {
    db.transaction((tx) => {
      tx.executeSql(query);
      updateStatus(tabela, "OK");
      insert_data(tabela);
    });
  } catch (e) {
    updateStatus(tabela);
    return;
  }
}

function updateStatus(msg, msg2 = "") {
  console.log(msg, msg2);
}
function excluir_tabelas() {
  drop_table("local");
  drop_table("experiencia");
  drop_table("cadastro");
  drop_table("bonus");
  drop_table("colegios");
  drop_table("curso");
}
function insert_data(tabela) {
  axios
    .get("https://www2.fag.edu.br/aplicativo-ios/php/ajax.php?funcao=" + tabela)
    .then(function (response) {
      let n = response.data.split(";");

      try {
        db.transaction(tx => {
          for (let i = 0; i < n.length - 1; i++) {
            tx.executeSql(n[i], []);
          }
        });
      } catch (e) {
        return;
      }
    });
  if (tabela == "bonus") {
    insere_bonus();
  }
}
function insere_bonus() {
  var query = "SELECT idpremio FROM bonus WHERE id_bonus = 1";
  try {
    db.transaction(function (transaction) {
      transaction.executeSql(query, [], function (transaction, results) {
        if (results.rows.length > 0) {
          // não faz nada
        } else {
          db.transaction(function (transaction) {
            transaction.executeSql(
              "INSERT INTO bonus (id_bonus, idpremio, pego) VALUES (1, 1000, 1)"
            );
          });

          db.transaction(function (transaction) {
            transaction.executeSql(
              "INSERT INTO bonus (id_bonus, idpremio, pego) VALUES (2, 1001, 1)"
            );
          });
        }
      });
    });
  } catch (e) {
    console.log("deu treta insere_bonus(*)");
  }
}

function criarTabelas() {
  create_table(
    "local",
    "CREATE TABLE IF NOT EXISTS local(id_local INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR NOT NULL, subtitulo VARCHAR NOT NULL, descricao TEXT NOT NULL);"
  );
  create_table(
    "experiencia",
    "CREATE TABLE IF NOT EXISTS experiencia(id_experiencia INTEGER PRIMARY KEY AUTOINCREMENT, id_local INTEGER NOT NULL, titulo VARCHAR NOT NULL, descricao TEXT NOT NULL, ponto INTEGER);"
  );
  create_table(
    "cadastro",
    "CREATE TABLE IF NOT EXISTS cadastro(id_cadastro INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR NOT NULL, email VARCHAR, telefone INTEGER, colegio VARCHAR, cursoPretendido VARCHAR, estilo_musical VARCHAR);"
  );
  create_table(
    "bonus",
    "CREATE TABLE IF NOT EXISTS bonus(id_bonus INTEGER PRIMARY KEY AUTOINCREMENT, idpremio INTEGER, pego INTEGER);"
  );
  create_table(
    "colegios",
    "CREATE TABLE IF NOT EXISTS colegios(id_escola INTEGER PRIMARY KEY AUTOINCREMENT, nome_colegio VARCHAR);"
  );
  create_table("curso", "CREATE TABLE IF NOT EXISTS curso(cursos VARCHAR);");
}

//LIMPAR DADOS
function delete_data(tabela) {
  var query = "DELETE FROM " + tabela;
  try {
    db.transaction(function (transaction) {
      transaction.executeSql(query);
      updateStatus(tabela, "Dados excluídos");
    });
  } catch (e) {
    return;
  }
}

function drop_table(tabela) {
  var query = "DROP TABLE " + tabela;
  try {
    db.transaction(function (transaction) {
      transaction.executeSql(query);
      updateStatus(tabela, "Dados excluídos");
    });
  } catch (e) {
    return;
  }
}

export async function primeiro_cadastro(nome, fone) {
  
  const json = await axios.post(
    "https://www2.fag.edu.br/aplicativo-ios/php/ajax.php?funcao=cadastro",
    JSON.stringify({
      nome,
      fone,
    })
  );
  const { data } = json.data;
  // console.log(data);
  if (data) {
    return new Promise((resolve) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO cadastro (nome, telefone) VALUES (?, ?)',[nome, fone],
          (_, { insertId }) => resolve(insertId),
        );
      });
    })


    
  } else {
    return "cadastro inicial realizado";
  }
}
export async function check_cadastro() {
  return new Promise((resolve) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT upper(nome) as nome FROM cadastro where id_cadastro = 1',[],
        (txObj, { rows: { _array } }) => resolve(_array[0]?.nome),
      );
    });
  })
 
  
}
