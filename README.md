Aqui está um README completo para o aplicativo de clima:

🌦 Aplicativo de Clima com React Native e Expo

Este é um aplicativo simples de clima criado com React Native e Expo. Ele permite que o usuário pesquise o clima de qualquer cidade ou obtenha as informações de clima com base em sua localização atual. O aplicativo utiliza a API da OpenWeatherMap para buscar dados de clima, incluindo temperatura, descrição e ícones.

📸 Capturas de Tela

🚀 Funcionalidades

	•	Buscar informações de clima por nome da cidade.
	•	Obter dados de clima automaticamente com base na localização do usuário.
	•	Exibir temperatura, descrição do clima e ícones de status.
	•	Interface intuitiva e simples, com carregamento e tratamento de erros.

🛠️ Tecnologias Utilizadas

	•	React Native: Framework para desenvolvimento de aplicativos móveis.
	•	Expo: Plataforma para desenvolvimento rápido em React Native.
	•	OpenWeatherMap API: API pública para dados de clima.
	•	expo-location: Biblioteca do Expo para acessar a localização do usuário.
	•	@expo/vector-icons: Biblioteca de ícones do Expo para adicionar ícones visuais.

📋 Pré-requisitos

	1.	Conta na OpenWeatherMap para obter uma chave de API. Crie uma conta gratuita em https://openweathermap.org/api.
	2.	Expo CLI: Certifique-se de que o Expo CLI está instalado:

npm install -g expo-cli

⚙️ Instalação

	1.	Clone o repositório:

git clone https://github.com/seuusuario/weather-app.git
cd weather-app


	2.	Instale as dependências:

npm install


	3.	Instale os pacotes expo-location e @expo/vector-icons:

expo install expo-location @expo/vector-icons


	4.	Adicione sua chave de API:
	•	Abra App.js e substitua SUA_CHAVE_DE_API_AQUI pela sua chave de API da OpenWeatherMap:

const API_KEY = 'SUA_CHAVE_DE_API_AQUI';


▶️ Executando o Aplicativo

	1.	Inicie o aplicativo:

expo start


	2.	Escaneie o código QR com o aplicativo Expo Go no seu dispositivo ou execute no emulador de sua preferência.

📚 Uso

	1.	Digite o nome de uma cidade e pressione o botão de busca para obter o clima dessa cidade.
	2.	Ou pressione o botão “Usar minha localização” para obter o clima com base na localização atual.
	3.	As informações de clima, incluindo temperatura e descrição, serão exibidas na tela.

🐛 Tratamento de Erros

	•	Permissão de Localização: Caso o usuário negue o acesso à localização, uma mensagem de erro será exibida.
	•	Cidade Não Encontrada: Se a cidade pesquisada não for encontrada, uma mensagem informará o erro.
	•	Erro de Rede: Caso a busca de dados falhe devido a problemas de rede ou API, uma mensagem de erro será exibida.

📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

🌟 Se você gostou deste projeto, dê uma estrela! 🌟

Esse README fornece instruções completas para instalar, configurar e executar o aplicativo, além de detalhes de contribuição e contato.
