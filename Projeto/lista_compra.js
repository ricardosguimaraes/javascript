// ===== SISTEMA DE LISTA DE COMPRAS =====
// Projeto consolidando Aulas 1-10 de JavaScript

// ===== DADOS INICIAIS (Aulas 8, 10) =====
let listaDeCompras = {
  nome: "Compras do Mês",
  dataCriacao: new Date().toLocaleDateString('pt-BR'),
  itens: [
    { 
      id: 1, 
      nome: "Arroz", 
      quantidade: 2, 
      unidade: "kg",
      categoria: "alimentos",
      preco: 5.50,
      comprado: false,
      prioridade: "alta"
    },
    { 
      id: 2, 
      nome: "Sabonete", 
      quantidade: 4, 
      unidade: "unidades",
      categoria: "higiene",
      preco: 2.00,
      comprado: false,
      prioridade: "média"
    },
    { 
      id: 3, 
      nome: "Leite", 
      quantidade: 3, 
      unidade: "litros",
      categoria: "alimentos",
      preco: 4.50,
      comprado: true,
      prioridade: "alta"
    },
    { 
      id: 4, 
      nome: "Detergente", 
      quantidade: 2, 
      unidade: "unidades",
      categoria: "limpeza",
      preco: 1.99,
      comprado: false,
      prioridade: "baixa"
    }
  ],

  // ===== MÉTODOS DO OBJETO (Aula 10) =====

  // Adicionar novo item
  adicionarItem(nome, quantidade, unidade, categoria, preco, prioridade = "média") {
    const novoId = this.itens.length > 0 
      ? Math.max(...this.itens.map(item => item.id)) + 1 
      : 1;

    const novoItem = {
      id: novoId,
      nome,
      quantidade,
      unidade,
      categoria: categoria.toLowerCase(),
      preco,
      comprado: false,
      prioridade: prioridade.toLowerCase()
    };

    this.itens.push(novoItem); // push (Aula 8)
    console.log(`✅ "${nome}" adicionado à lista!`);
    return novoItem;
  },

  // Remover item por ID
  removerItem(id) {
    const indice = this.itens.findIndex(item => item.id === id);

    if (indice === -1) {
      console.log("❌ Item não encontrado!");
      return false;
    }

    const removido = this.itens.splice(indice, 1)[0]; // splice (Aula 8)
    console.log(`🗑️ "${removido.nome}" removido da lista!`);
    return true;
  },

  // Marcar/Desmarcar como comprado
  alternarComprado(id) {
    const item = this.itens.find(item => item.id === id); // find (Aula 9)

    if (!item) {
      console.log("❌ Item não encontrado!");
      return false;
    }

    item.comprado = !item.comprado; // Operador de negação (Aula 4)
    const status = item.comprado ? "comprado ✓" : "pendente";
    console.log(`📝 "${item.nome}" marcado como ${status}`);
    return true;
  },

  // Listar todos os itens
  listarItens() {
    console.log("\n===== LISTA DE COMPRAS =====");
    console.log(`📅 Criada em: ${this.dataCriacao}`);
    console.log(`📦 Total de itens: ${this.itens.length}\n`);

    // for...of (Aula 6)
    for (let item of this.itens) {
      const status = item.comprado ? "✓" : "○";
      const total = (item.quantidade * item.preco).toFixed(2);
      console.log(`${status} [${item.prioridade.toUpperCase()}] ${item.nome} - ${item.quantidade} ${item.unidade} - R$ ${total} (${item.categoria})`);
    }
  },

  // Filtrar por categoria
  filtrarPorCategoria(categoria) {
    // filter (Aula 9)
    return this.itens.filter(item => 
      item.categoria.toLowerCase() === categoria.toLowerCase()
    );
  },

  // Filtrar itens pendentes
  listarPendentes() {
    const pendentes = this.itens.filter(item => !item.comprado);

    console.log("\n===== ITENS PENDENTES =====");

    if (pendentes.length === 0) {
      console.log("✅ Todos os itens foram comprados!");
      return;
    }

    pendentes.forEach(item => { // forEach (Aula 9)
      console.log(`○ ${item.nome} - ${item.quantidade} ${item.unidade}`);
    });
  },

  // Calcular total da compra
  calcularTotal() {
    // reduce (Aula 9)
    const total = this.itens.reduce((acc, item) => {
      return acc + (item.quantidade * item.preco);
    }, 0);

    const totalComprado = this.itens
      .filter(item => item.comprado)
      .reduce((acc, item) => acc + (item.quantidade * item.preco), 0);

    const totalPendente = total - totalComprado;

    return {
      total: total.toFixed(2),
      comprado: totalComprado.toFixed(2),
      pendente: totalPendente.toFixed(2)
    };
  },

  // Estatísticas da lista
  estatisticas() {
    const total = this.itens.length;
    const comprados = this.itens.filter(item => item.comprado).length;
    const pendentes = total - comprados;

    // Agrupar por categoria
    const categorias = {};

    this.itens.forEach(item => {
      if (!categorias[item.categoria]) {
        categorias[item.categoria] = 0;
      }
      categorias[item.categoria]++;
    });

    return {
      total,
      comprados,
      pendentes,
      percentualConcluido: ((comprados / total) * 100).toFixed(1),
      categorias
    };
  },

  // Ordenar por prioridade
  ordenarPorPrioridade() {
    const prioridadeOrdem = { alta: 1, média: 2, baixa: 3 };

    this.itens.sort((a, b) => {
      return prioridadeOrdem[a.prioridade] - prioridadeOrdem[b.prioridade];
    });

    console.log("📊 Lista ordenada por prioridade!");
  },

  // Buscar item por nome
  buscarItem(nome) {
    // find (Aula 9)
    const item = this.itens.find(item => 
      item.nome.toLowerCase().includes(nome.toLowerCase())
    );

    if (item) {
      console.log(`\n🔍 Item encontrado:`);
      console.log(`Nome: ${item.nome}`);
      console.log(`Quantidade: ${item.quantidade} ${item.unidade}`);
      console.log(`Categoria: ${item.categoria}`);
      console.log(`Preço unitário: R$ ${item.preco.toFixed(2)}`);
      console.log(`Status: ${item.comprado ? "Comprado ✓" : "Pendente"}`);
    } else {
      console.log(`❌ Nenhum item encontrado com "${nome}"`);
    }

    return item;
  },

  // Atualizar quantidade
  atualizarQuantidade(id, novaQuantidade) {
    const item = this.itens.find(item => item.id === id);

    if (!item) {
      console.log("❌ Item não encontrado!");
      return false;
    }

    const antigaQuantidade = item.quantidade;
    item.quantidade = novaQuantidade;
    console.log(`📝 Quantidade de "${item.nome}" atualizada de ${antigaQuantidade} para ${novaQuantidade}`);
    return true;
  }
};

// ===== FUNÇÕES AUXILIARES (Aula 7) =====

function exibirMenu() {
  console.log("\n===== MENU =====");
  console.log("1. Listar todos os itens");
  console.log("2. Adicionar novo item");
  console.log("3. Marcar item como comprado");
  console.log("4. Remover item");
  console.log("5. Ver itens pendentes");
  console.log("6. Calcular total");
  console.log("7. Ver estatísticas");
  console.log("8. Buscar item");
  console.log("9. Ordenar por prioridade");
  console.log("0. Sair");
}

function formatarMoeda(valor) {
  return `R$ ${parseFloat(valor).toFixed(2)}`;
}

// ===== DEMONSTRAÇÃO DO SISTEMA =====

console.log("🛒 SISTEMA DE LISTA DE COMPRAS");
console.log("================================\n");

// Demonstração inicial
listaDeCompras.listarItens();

// Adicionar novos itens
console.log("\n📝 Adicionando novos itens...");
listaDeCompras.adicionarItem("Café", 0.5, "kg", "alimentos", 18.90, "alta");
listaDeCompras.adicionarItem("Papel Higiênico", 1, "pacote", "higiene", 15.00, "média");

// Marcar alguns como comprados
console.log("\n✓ Marcando itens como comprados...");
listaDeCompras.alternarComprado(1);
listaDeCompras.alternarComprado(4);

// Listar pendentes
listaDeCompras.listarPendentes();

// Calcular totais
console.log("\n💰 TOTAIS:");
const totais = listaDeCompras.calcularTotal();
console.log(`Total geral: ${formatarMoeda(totais.total)}`);
console.log(`Total comprado: ${formatarMoeda(totais.comprado)}`);
console.log(`Total pendente: ${formatarMoeda(totais.pendente)}`);

// Estatísticas
console.log("\n📊 ESTATÍSTICAS:");
const stats = listaDeCompras.estatisticas();
console.log(`Total de itens: ${stats.total}`);
console.log(`Itens comprados: ${stats.comprados}`);
console.log(`Itens pendentes: ${stats.pendentes}`);
console.log(`Progresso: ${stats.percentualConcluido}%`);
console.log(`\nItens por categoria:`);
for (let categoria in stats.categorias) { // for...in (Aula 10)
  console.log(`  ${categoria}: ${stats.categorias[categoria]} itens`);
}

// Buscar item
console.log("\n🔍 Buscando item...");
listaDeCompras.buscarItem("café");

// Ordenar e listar novamente
console.log("\n📊 Ordenando por prioridade...");
listaDeCompras.ordenarPorPrioridade();
listaDeCompras.listarItens();

// Filtrar por categoria
console.log("\n🏷️ Filtrando alimentos:");
const alimentos = listaDeCompras.filtrarPorCategoria("alimentos");
alimentos.forEach(item => {
  console.log(`- ${item.nome}: ${item.quantidade} ${item.unidade}`);
});

console.log("\n================================");
console.log("🎉 Demonstração concluída!");