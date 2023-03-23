// @ts-nocheck
import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  cabecalho: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
  },
  red: {
    backgroundColor: "#e2024b",
    width: "5%",
  },
  black: {
    backgroundColor: "#000",
    width: "95%",
    justifyContent: "center",
    paddingLeft: "5%",
  },
  Titulo: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

function Escolha({ navigation }) {
  return (
    <View style={styles.corpo}>
      <View style={styles.cabecalho}>
        <View style={styles.red}></View>
        <View style={styles.black}>
          <Text style={styles.Titulo} size>
            TERMOS DE USO DE APLICATIVO
          </Text>
        </View>
      </View>
      <ScrollView style={{padding:'5%', fontFamily:'Roboto'}}>
      <Text style={{fontWeight:'bold',marginTop:'5%'}}>ACEITAÇÃO </Text>
        <Text>
          Este é um contrato firmado entre você, de agora em diante denominado
          como usuário, e a Fundação Assis Gurgacz, cadastrada no CNPJ:
          02.203.539.0001-73, com sede no município de Cascavel, Paraná,
          localizada na Av. das Torres, Nº 500, e de agora em diante denominada
          FAG. Este “Termo de Uso de Aplicativo” rege o uso do aplicativo FAGX,
          para dispositivos móveis (Android e IOS).
        </Text>
        <Text style={{fontWeight:'bold',marginTop:'5%'}}>LICENÇA LIMITADA </Text>
        <Text>
          
          Você recebeu uma licença limitada, não transferível, não exclusiva,
          livre de royalties e revogável para baixar, instalar, executar e
          utilizar este aplicativo em seu dispositivo. Você reconhece e concorda
          que a FAG concede ao usuário uma licença exclusiva para uso e desta
          forma não lhe transfere os direitos sobre o produto. O aplicativo
          deverá ser utilizado por você, usuário. A venda, transferência,
          modificação, engenharia reversa ou distribuição bem como a cópia de
          textos, imagens ou quaisquer partes nele contido é expressamente
          proibida.
        </Text>
        <Text style={{fontWeight:'bold',marginTop:'5%'}}>ALTERAÇÕES, MODIFICAÇÕES E RESCISÃO </Text>
        <Text>
          
          A FAG reserva-se no direito de, a qualquer tempo, modificar estes
          termos seja incluindo, removendo ou alterando quaisquer de suas
          cláusulas. Tais modificações terão efeito imediato. Após publicadas
          tais alterações, ao continuar com o uso do aplicativo você terá
          aceitado e concordado em cumprir os termos modificados. A FAG pode, de
          tempos em tempos, modificar ou descontinuar (temporária ou
          permanentemente) a distribuição ou a atualização deste aplicativo. A
          FAG não é obrigada a fornecer nenhum serviço de suporte para este
          aplicativo. O usuário não poderá responsabilizar a FAG nem seus
          diretores, executivos, funcionários, afiliados, agentes, contratados
          ou licenciadores por quaisquer modificações, suspensões ou
          descontinuidade do aplicativo.
        </Text>
        <Text style={{fontWeight:'bold',marginTop:'5%'}}>CONSENTIMENTO PARA COLETA E USO DE DADOS </Text>
        <Text>
          
          Você concorda que a FAG pode coletar e usar dados técnicos de seu
          dispositivo tais como especificações, configurações, versões de
          sistema operacional, tipo de conexão à internet e afins. Os dados
          preenchidos nos campos de cadastro irão compor um banco de dados da
          FAG, não podendo serem comercializados ou cedidos a outrem, sob
          nenhuma hipótese, preservando o seu direito a privacidade.
        </Text>
        <Text style={{fontWeight:'bold',marginTop:'5%'}}>ISENÇÃO DE GARANTIAS E LIMITAÇÕES DE RESPONSABILIDADE </Text>
        <Text>
          
          Este aplicativo estará em contínuo desenvolvimento e pode conter erros
          e, por isso, o uso é fornecido "no estado em que se encontra" e sob
          risco do usuário final. Na extensão máxima permitida pela legislação
          aplicável a FAG e seus fornecedores isentam-se de quaisquer garantias
          e condições expressas ou implícitas incluindo, sem limitação,
          garantias de comercialização, adequação a um propósito específico,
          titularidade e não violação no que diz respeito ao aplicativo e
          qualquer um de seus componentes ou ainda à prestação ou não de
          serviços de suporte. A FAG não garante que a operação deste aplicativo
          seja contínua e sem defeitos. Exceto pelo estabelecido neste documento
          não há outras garantias, condições ou promessas ao aplicativo,
          expressas ou implícitas, e todas essas garantias, condições e
          promessas podem ser excluídas de acordo com o que é permitido por lei
          sem prejuízo à FAG e seus colaboradores.
        </Text>
        <Text style={{marginBottom:'20%'}}>
          I. A FAG não garante, declara ou assegura que o uso deste aplicativo
          será ininterrupto ou livre de erros e você concorda que a FAG poderá
          remover por períodos indefinidos ou cancelar este aplicativo a
          qualquer momento sem que você seja avisado. II. A FAG não garante,
          declara nem assegura que este aplicativo esteja livre de perda,
          interrupção, ataque, vírus, interferência, pirataria ou outra invasão
          de segurança e isenta-se de qualquer responsabilidade em relação à
          essas questões. Você é responsável pelo backup do seu próprio
          dispositivo. III. Em hipótese alguma a FAG, bem como seus diretores,
          executivos, funcionários, afiliadas, agentes, contratados ou
          licenciadores responsabilizar-se-ão por perdas ou danos causados pelo
          uso do aplicativo. Após ler atentamente todo o conteúdo deste termo e
          pressionar o botão “ACEITO”, você reconhecerá que analisou e aceitou
          as condições de uso, concordando em cumpri-los.
        </Text>
      </ScrollView>
      <View></View>
    </View>
  );
}
export default Escolha;
