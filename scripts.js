const Modal = {
    open() {
        // Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close() {
        // fechar o modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
    },
    {
    id: 2,
    description: 'Website',
    amount: 50000,
    date: '23/01/2021',
    },
    {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021',
    },
    {
    id: 3,
    description: 'App',
    amount: 20000,
    date: '23/01/2021',
    }
]

//Eu preciso somar as entradas
//Depois eu preciso somar as saídas entradas
//remover das entradas o valor das saídas
// assim, eu terei o total

const Transaction = {
    incomes(){
        // somar as entradas
    },
    expenses(){
        // somar as saídas
    },
    total(){
        //entradas - saídas
    }
}

// Substituir os dados do HTML com os dados JS

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html
    }
}

transactions.forEach(function (transaction) {
    DOM.addTransaction(transaction)    
})