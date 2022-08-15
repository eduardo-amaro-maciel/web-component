class ListaPessoa extends HTMLElement {

    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        let enderecos = [
    
            { nome: 'João da Silva', telefone: '47 98798-12518', endereco: 'Rua XV de novembro, 531', cidade: 'Itajaí', uf: 'SC' },
            { nome: 'Mario da Silva', telefone: '47 98798-48154', endereco: 'Rua XV de outubro, 15', cidade: 'Balneário Camboriú', uf: 'SC' },
            { nome: 'João de Souza', telefone: '48 97887-68154', endereco: 'Rua 13 de julho, 48', cidade: 'Florianópolis', uf: 'SC' },
            { nome: 'João Maria', telefone: '45 99978-78125', endereco: 'Rua 7 de setembro, 654', cidade: 'Curitiba', uf: 'PR' },
            { nome: 'Maria João', telefone: '11 97987-58125', endereco: 'Rua 21 de abril, 654', cidade: 'São Paulo', uf: 'SP' },
            { nome: 'Silva e Souza', telefone: '47 99997-65484', endereco: 'Rua 01 de abril, 21', cidade: 'Itajaí', uf: 'SC' },
            { nome: 'Jacinto Filho', telefone: '85 99914-12184', endereco: 'Rua 25 de dezembro, 151', cidade: 'Rio Branco', uf: 'AC' },
            { nome: 'Telêmaco Borba', telefone: '51 97487-88429', endereco: 'Rua Marechal Rondom, 315', cidade: 'Porto Alegre', uf: 'RS' },
            { nome: 'Hugo Chaves', telefone: '47 94156-98781', endereco: 'Rua Candido Mariano, 651', cidade: 'Blumenau', uf: 'SC' },
            { nome: 'Evita Perón', telefone: '47 98748-61258', endereco: 'Avenida Afonso Pena, 2316', cidade: 'Camboriú', uf: 'SC' },
        ];

        
        let table = document.createElement('table')

        let thead = document.createElement('thead')

        let trTop = document.createElement('tr')

        let thNome = document.createElement('th')
        thNome.innerText = 'NOME'

        let thTelefone = document.createElement('th')
        thTelefone.innerText = 'TELEFONE'

        let thEndereco = document.createElement('th')
        thEndereco.innerText = 'ENDERECO'

        let thCidadde = document.createElement('th')
        thCidadde.innerText = 'CIDADE'

        let thUf = document.createElement('th')
        thUf.innerText = 'UF'        

        trTop.appendChild(thNome)
        trTop.appendChild(thTelefone)
        trTop.appendChild(thEndereco)
        trTop.appendChild(thCidadde)
        trTop.appendChild(thUf)

        thead.appendChild(trTop)
        table.appendChild(thead)


        let tbody = document.createElement('tbody')
        
        enderecos.map(e => {

            let trContext = document.createElement('tr')

            let tdNome = document.createElement('td')
            tdNome.innerText = e.nome

            let tdTelefone = document.createElement('td')
            tdTelefone.innerText = e.telefone

            let tdEndereco = document.createElement('td')
            tdEndereco.innerText = e.endereco

            let tdCidade = document.createElement('td')
            tdCidade.innerText = e.cidade
            

            let tdUf = document.createElement('td')
            tdUf.innerText = e.uf
          

            trContext.appendChild(tdNome)
            trContext.appendChild(tdTelefone)
            trContext.appendChild(tdEndereco)
            trContext.appendChild(tdCidade)
            trContext.appendChild(tdUf)
            
          
            tbody.appendChild(trContext)
        })
        table.appendChild(tbody)

        const style = document.createElement('style')
        style.textContent = `
  
            table {
                width: 100%;
                text-align: center;
            }

            thead tr th {
                border-bottom: 1px solid black;
                padding: 0px;
                font-family: Arial, Helvetica, sans-serif;
                color: #666
            }

            tbody tr:hover {
                background: #f6f7a8;
            }

            tr td {
                padding: 10px;
                font-family: Arial, Helvetica, sans-serif;
                color: #999;
            }
        `

        shadow.appendChild(table)
        shadow.appendChild(style)
    }
}

customElements.define('table-pessoa', ListaPessoa)


