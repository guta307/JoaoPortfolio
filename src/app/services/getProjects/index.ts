import axios from "axios";

// Defina sua chave de API como uma variável de ambiente ou substitua-a diretamente aqui
const API_KEY = process.env.NEXT_PUBLIC_MY_API_KEY;

// Função para fazer uma solicitação GET para o bin
async function fetchDataFromBin(binId: string): Promise<any> {
  try {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/${binId}`, {
      headers: {
        "X-Access-Key": API_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    });

    // Verifique se a solicitação foi bem-sucedida
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Erro na solicitação GET");
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(`Erro ao obter dados do bin: ${error.message}`);
  }
}

export default fetchDataFromBin;
