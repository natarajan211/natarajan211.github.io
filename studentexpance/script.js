// ===============================
// SMARTSPEND EXPENSE TRACKER
// ===============================

let transactions =
    JSON.parse(localStorage.getItem("smartSpendTransactions")) || [];

let budget =
    Number(localStorage.getItem("smartSpendBudget")) || 100000;

let currentType = "expense";


// ===============================
// DOM
// ===============================

const modal = document.getElementById("modal");
const form = document.getElementById("expenseForm");


// ===============================
// OPEN / CLOSE MODAL
// ===============================

function openModal() {

    modal.classList.add("show");

    document.getElementById("date").value =
        new Date().toISOString().split("T")[0];
}


function closeModal() {
    modal.classList.remove("show");
}


// Close modal when clicking outside

modal.addEventListener("click", function(e) {

    if (e.target === modal) {
        closeModal();
    }

});


// ===============================
// TRANSACTION TYPE
// ===============================

document.querySelectorAll(".type").forEach(button => {

    button.addEventListener("click", function() {

        document.querySelectorAll(".type")
            .forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        currentType = this.dataset.type;

    });

});


// ===============================
// ADD TRANSACTION
// ===============================

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const amount =
        Number(document.getElementById("amount").value);

    const description =
        document.getElementById("description").value.trim();

    const category =
        document.getElementById("category").value;

    const date =
        document.getElementById("date").value;


    if (!amount || amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }


    const transaction = {

        id: Date.now(),

        type: currentType,

        amount: amount,

        description: description,

        category: category,

        date: date

    };


    transactions.unshift(transaction);


    saveData();

    renderTransactions();

    updateDashboard();

    form.reset();

    closeModal();

});


// ===============================
// SAVE DATA
// ===============================

function saveData() {

    localStorage.setItem(
        "smartSpendTransactions",
        JSON.stringify(transactions)
    );

}


// ===============================
// DELETE TRANSACTION
// ===============================

function deleteTransaction(id) {

    transactions =
        transactions.filter(item => item.id !== id);

    saveData();

    renderTransactions();

    updateDashboard();

}


// ===============================
// CLEAR ALL
// ===============================

function clearAll() {

    if (transactions.length === 0) {

        alert("No transactions available.");

        return;
    }


    const confirmDelete =
        confirm("Delete all transactions?");


    if (!confirmDelete) return;


    transactions = [];

    saveData();

    renderTransactions();

    updateDashboard();

}


// ===============================
// FORMAT MONEY
// ===============================

function formatMoney(amount) {

    return new Intl.NumberFormat("en-IN", {

        style: "currency",

        currency: "INR",

        maximumFractionDigits: 0

    }).format(amount);

}


// ===============================
// CATEGORY ICON
// ===============================

function getIcon(category) {

    const icons = {

        food: "🍔",

        transport: "🚌",

        shopping: "🛍️",

        education: "📚",

        bills: "💡",

        other: "📦"

    };

    return icons[category] || "📦";

}


// ===============================
// RENDER TRANSACTIONS
// ===============================

function renderTransactions() {

    const list =
        document.getElementById("transactionList");

    const search =
        document.getElementById("search")
            .value.toLowerCase();

    const filter =
        document.getElementById("filter").value;


    let filtered =
        transactions.filter(item => {

            const matchesSearch =
                item.description
                    .toLowerCase()
                    .includes(search);

            const matchesFilter =
                filter === "all" ||
                item.category === filter;

            return matchesSearch && matchesFilter;

        });


    if (filtered.length === 0) {

        list.innerHTML = `
            <div class="empty">
                <div style="font-size:40px">💸</div>
                <p>No transactions found</p>
            </div>
        `;

        return;
    }


    list.innerHTML =
        filtered.map(item => {

            const sign =
                item.type === "income" ? "+" : "-";

            const amountClass =
                item.type === "income"
                    ? "income"
                    : "expense";


            return `

                <div class="transaction">

                    <div class="transaction-left">

                        <div class="transaction-icon">
                            ${getIcon(item.category)}
                        </div>

                        <div>

                            <div class="transaction-title">
                                ${escapeHTML(item.description)}
                            </div>

                            <div class="transaction-date">
                                ${item.category.toUpperCase()}
                                •
                                ${formatDate(item.date)}
                            </div>

                        </div>

                    </div>


                    <div>

                        <span class="transaction-amount ${amountClass}">
                            ${sign}${formatMoney(item.amount)}
                        </span>

                        <button
                            class="delete-btn"
                            onclick="deleteTransaction(${item.id})">
                            ✕
                        </button>

                    </div>

                </div>

            `;

        }).join("");

}


// ===============================
// DATE FORMAT
// ===============================

function formatDate(date) {

    if (!date) return "";

    return new Date(date + "T00:00:00")
        .toLocaleDateString("en-IN", {

            day: "2-digit",

            month: "short",

            year: "numeric"

        });

}


// ===============================
// DASHBOARD
// ===============================

function updateDashboard() {

    let income = 0;

    let expense = 0;


    transactions.forEach(item => {

        if (item.type === "income") {

            income += item.amount;

        } else {

            expense += item.amount;

        }

    });


    const balance = income - expense;


    document.getElementById("balance")
        .textContent = formatMoney(balance);

    document.getElementById("income")
        .textContent = formatMoney(income);

    document.getElementById("expense")
        .textContent = formatMoney(expense);


    document.getElementById("budgetText")
        .textContent = formatMoney(budget);


    // Budget progress

    const percentage =
        Math.min((expense / budget) * 100, 100);


    document.getElementById("budgetProgress")
        .style.width = percentage + "%";


    const status =
        document.getElementById("budgetStatus");


    if (expense >= budget) {

        status.textContent =
            "⚠️ Budget exceeded";

        status.style.color = "#f87171";

    } else if (percentage >= 80) {

        status.textContent =
            "⚠️ 80% of budget used";

        status.style.color = "#fbbf24";

    } else {

        status.textContent =
            "Budget available";

        status.style.color = "#4ade80";

    }


    updateCategories(expense);

    updateInsight(expense, income);

}


// ===============================
// CATEGORY ANALYSIS
// ===============================

function updateCategories(totalExpense) {

    const categories = {

        food: 0,

        transport: 0,

        shopping: 0,

        education: 0,

        bills: 0

    };


    transactions.forEach(item => {

        if (
            item.type === "expense" &&
            categories[item.category] !== undefined
        ) {

            categories[item.category] += item.amount;

        }

    });


    Object.keys(categories).forEach(category => {

        const element =
            document.getElementById(
                category + "Amount"
            );

        if (element) {

            element.textContent =
                formatMoney(categories[category]);

        }

    });


    document.getElementById("chartTotal")
        .textContent = formatMoney(totalExpense);

}


// ===============================
// FINANCIAL INSIGHT
// ===============================

function updateInsight(expense, income) {

    const text =
        document.getElementById("insightText");


    if (transactions.length === 0) {

        text.textContent =
            "Add some expenses to receive personalized spending insights.";

        return;
    }


    if (expense === 0) {

        text.textContent =
            "Great start! You haven't recorded any expenses yet.";

        return;
    }


    if (expense > income && income > 0) {

        text.textContent =
            "Your expenses are currently higher than your income. Consider reviewing your largest spending categories.";

        return;
    }


    const food =
        transactions

            .filter(
                item =>
                    item.type === "expense" &&
                    item.category === "food"
            )

            .reduce(
                (sum,item) =>
                    sum + item.amount,
                0
            );


    if (food > expense * 0.35) {

        text.textContent =
            "Food is a major part of your spending. Reviewing food expenses could help you manage your budget.";

        return;
    }


    if (expense > budget * 0.8) {

        text.textContent =
            "You've used more than 80% of your monthly budget. Keep an eye on upcoming expenses.";

        return;
    }


    text.textContent =
        "Your spending is currently within your budget. Keep tracking consistently to understand your financial habits.";

}


// ===============================
// ESCAPE HTML
// ===============================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// ===============================
// DARK / LIGHT MODE
// ===============================

document.getElementById("themeBtn")
    .addEventListener("click", function() {

        document.body.classList.toggle("light");

        this.textContent =
            document.body.classList.contains("light")
                ? "🌙"
                : "☀️";

    });


// ===============================
// INITIAL LOAD
// ===============================

renderTransactions();

updateDashboard();