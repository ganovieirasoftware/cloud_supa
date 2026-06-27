export function mapPessoa(row) {
  return {
    id: row.id,
    nome: row.nome,
    funcao: row.funcao,
    numero: row.numero,
    codigo: row.codigo,
    ativo: row.ativo,
    fotoCartao: row.foto_cartao || row.fotoCartao || "",
  };
}

export function mapJornada(row) {
  return {
    id: row.id,
    jornada: row.jornada,
    data: row.data,
    dataPT: row.data_pt || row.dataPT || "",
    hipodromo: row.hipodromo,
    ordem: row.ordem,
  };
}

export function mapAdministrador(row) {
  return {
    id: row.id,
    nome: row.nome,
    email: row.email,
    tipo: row.tipo,
    ativo: row.ativo,
    authUserId: row.auth_user_id || null,
  };
}

export function mapEntrada(row, jornadasById) {
  const j = row.jornada_id ? jornadasById.get(row.jornada_id) : null;
  const evento =
    row.evento ||
    (j ? `${j.jornada} | ${j.dataPT} | ${j.hipodromo}` : "");
  const datahora = row.datahora
    ? new Date(row.datahora).toLocaleString("pt-PT")
    : row.data_hora || "";
  return {
    id: row.id,
    jornadaId: row.jornada_id,
    pessoaId: row.pessoa_id,
    codigo: row.codigo,
    nome: row.nome,
    funcao: row.funcao,
    operador: row.operador,
    datahora,
    evento,
  };
}

export function formatEventText(j) {
  return `${j.jornada} | ${j.dataPT} | ${j.hipodromo}`;
}
