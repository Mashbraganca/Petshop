<template>
  <v-app style=" background: #B388FF background: -webkit-linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF); 
background: linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF);">
    <NavbarAdm/>
    <div class="Produtos">
        <div class="Gerenitens">
            <v-container grid-list-xs>
                <v-row>
                    <v-col
                     cols="12"
                     md = "8"
                    >
                    <v-card
                        class="elevation-10"
                        shaped
                    >
                        <v-card-title class="text-uppercase display-2">
                            Produtos
                        </v-card-title>
                    </v-card>
                    </v-col>
                    <v-col
                     cols ="12"
                     md="4"
                    >
                        <v-card
                        class="pt-6 px-6 elevation-10"
                        >
                            <v-text-field
                            dense
                            filled
                            rounded
                            label="Busca"
                            append-icon="mdi-magnify"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-card
            v-for="item in items" :key="item.firstname" 
            class="mx-auto my-6 elevation-10"
            max-width="900"
            >
            <v-card-title v-text ="item.Nome"></v-card-title>

            <v-container grid-list-xs>
                <v-row>
                    <v-col
                    cols="12"
                    md="3"
                    >
                    <v-avatar size=160px>
                        <img :src=item.photo alt="product Picture">
                    </v-avatar>

                    </v-col>

                    <v-col
                    cols="12"
                    md="9"
                    >
                    <p>Id: {{item.id}}</p>
                    <p>Categoria: {{item.Categoria}}</p>
                    <p>Preço:  R${{item.preço}} </p>
                    <p>Em estoque: {{item.em_estoque}} Vendidos:{{item.vendidos}}</p>
                    <br>
                    <p>Descrição: {{item.Descrição}}</p>
                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    ></v-col>

                    <v-col
                    cols="12"
                    md="3"
                    ></v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-btn large color="primary">Editar</v-btn>
                    </v-col>
                </v-row>
          </v-container>
        </v-card> 
        
      </div>
      <div><v-row>a</v-row></div>
    </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'

export default {
  name: 'App',
  components: { NavbarAdm },
  

  data: () => ({
      items:[{Nome: 'Special dog vegetais 20kg', Categoria: 'Ração',id:'#1',preço: '137,00',em_estoque: '17',vendidos:'3',Descrição: 'Ração de cachorro feita de vegetais, 20 kg!  ',photo: 'https://www.petlove.com.br/images/products/193230/large/1780152_c%C3%B3pia.jpg?1556454329'},
             {Nome: 'Casa de cachorro', Categoria: 'Acessórios',id:'#2',preço: '700,00',em_estoque: '4',vendidos:'1',Descrição: 'Casa de cachorro tamanho grande, feita tem madeira! ',photo: 'https://http2.mlstatic.com/casa-casinha-de-cachorro-dupla-media-harry-dora-dog-house-D_NQ_NP_750044-MLB31050405664_062019-F.jpg'},
             {Nome: 'Coleira com tag', Categoria: 'Acessórios',id:'#3',preço: '60,00',em_estoque: '32',vendidos:'15',Descrição: 'Coleira de cachorro com tag para por informações do animal  ',photo: 'data:image/jpeg;base64,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'},
             
             ],
        }),
};
</script>