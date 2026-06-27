import { supabase } from "../supabase.js";
import { mapEntrada } from "./mappers.js";

export async function fetchEntradas(jornadasById) {
  const { data, error } = await supabase
    .from("entradas")
    .select("*")
    .order("datahora", { ascending: false });
  if (error) throw error;
  return (data || []).map((row) => mapEntrada(row, jornadasById));
}

export async function insertEntrada(payload) {
  const { data, error } = await supabase.from("entradas").insert(payload).select("*").single();
  if (error) throw error;
  return data;
}

export async function findEntrada(jornadaId, codigo) {
  const { data, error } = await supabase
    .from("entradas")
    .select("*")
    .eq("jornada_id", jornadaId)
    .eq("codigo", codigo)
    .maybeSingle();
  if (error) throw error;
  return data;
}
