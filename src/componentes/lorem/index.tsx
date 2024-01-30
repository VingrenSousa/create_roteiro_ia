import { Text } from "react-native"
interface Props{
    size?:number
}

export default function Lorem({size}:Props){
    return(
        <Text>
            O que é Lorem Ipsum?
            Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou uma prova de tipos e a misturou para fazer um livro de espécimes de tipos. Ela sobreviveu não apenas a cinco séculos, mas também ao salto para a composição tipográfica eletrônica, permanecendo essencialmente inalterada. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.

            Porque usamos isso?
            É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como modelo de texto padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes propositalmente (injetando humor e coisas do gênero).
            {
                size
                ?(<Text>
                    A passagem padrão de Lorem Ipsum, usada desde 1500
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Seção 1.10.32 de "de Finibus Bonorum et Malorum", escrito por Cícero em 45 AC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arquiteto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam. , quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex e a comodi consequatur?

Tradução de 1914 por H. Rackham
"Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar o prazer e elogiar a dor e lhe darei um relato completo do sistema e exporei os verdadeiros ensinamentos do grande explorador da verdade, o mestre-construtor da felicidade humana. Ninguém rejeita, não gosta ou evita o prazer em si, porque é prazer, mas porque aqueles que não sabem como buscar o prazer racionalmente encontram consequências que são extremamente dolorosas. Também não há ninguém que ame, busque ou deseje obter dor por si só, porque é dor, mas porque ocasionalmente ocorrem circunstâncias em que o trabalho e a dor podem proporcionar-lhe algum grande prazer. Para tomar um exemplo trivial, qual de nós alguma vez realiza exercício físico laborioso, exceto para obter alguma vantagem dele? Mas quem tem o direito de criticar um homem que escolhe desfrutar de um prazer que não tem consequências irritantes, ou que evita uma dor que não produz nenhum prazer resultante?"

Seção 1.10.33 de "de Finibus Bonorum et Malorum", escrito por Cícero em 45 AC
"At vero eos et acusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis é uma distinção expedita. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

Tradução de 1914 por H. Rackham
“Por outro lado, denunciamos com justa indignação e antipatia os homens que estão tão seduzidos e desmoralizados pelos encantos do prazer do momento, tão cegos pelo desejo, que não podem prever a dor e os problemas que estão fadados a seguir; e iguais a culpa pertence àqueles que falham em seu dever por fraqueza de vontade, o que é o mesmo que dizer por se encolherem diante do trabalho e da dor. Esses casos são perfeitamente simples e fáceis de distinguir. Em uma hora livre, quando nosso poder de escolha está livre e quando nada nos impede de fazer o que mais gostamos, todo prazer deve ser bem-vindo e toda dor evitada. Mas em certas circunstâncias e devido às reivindicações do dever ou às obrigações dos negócios, ocorrerá frequentemente que os prazeres devem ser repudiados. e aborrecimentos aceitos. O homem sábio, portanto, sempre se apega a este princípio de seleção nessas questões: ele rejeita prazeres para garantir outros prazeres maiores, ou então suporta dores para evitar dores piores.


                </Text>)
                :(<Text></Text>)
            }


        </Text>
    )
}