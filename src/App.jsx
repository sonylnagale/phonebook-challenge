import { useEffect, useMemo, useState } from "react";
import "./App.css";

const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: "John Mitchell",
        phone: "(555) 100-2001",
        email: "john.mitchell@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=12",
    },
    {
        id: 2,
        name: "Sarah Chen",
        phone: "(555) 100-2002",
        email: "sarah.chen@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 3,
        name: "Marcus Johnson",
        phone: "(555) 100-2003",
        email: "marcus.j@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=13",
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        phone: "(555) 100-2004",
        email: "emily.r@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=9",
    },
    {
        id: 5,
        name: "David Kim",
        phone: "(555) 100-2005",
        email: "david.kim@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=14",
    },
    {
        id: 6,
        name: "Lisa Anderson",
        phone: "(555) 100-2006",
        email: "lisa.a@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=10",
    },
    {
        id: 7,
        name: "James Wilson",
        phone: "(555) 100-2007",
        email: "james.w@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=15",
    },
    {
        id: 8,
        name: "Maria Garcia",
        phone: "(555) 100-2008",
        email: "maria.g@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=20",
    },
    {
        id: 9,
        name: "Robert Taylor",
        phone: "(555) 100-2009",
        email: "robert.t@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=11",
    },
    {
        id: 10,
        name: "Jennifer Lee",
        phone: "(555) 100-2010",
        email: "jennifer.lee@lvservices.com",
        photo: "https://i.pravatar.cc/150?img=23",
    },
];

const App = () => {
    const [contacts, setContacts] = useState(FALLBACK_CONTACTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {}, []);

    const [query, setQuery] = useState("");

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    function handleSubmit(e) {
        e.preventDefault();
        // Add contact submission logic here
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <h1 className="page__title">Low Voltage Services Directory</h1>
                <p className="page__subtitle">Network Infrastructure & Security Systems Team</p>
            </header>

            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading">Search Team</h2>
                <div className="search__controls">
                    <label htmlFor="search-input">Search</label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search by name or phone number"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        data-testid="search-input"
                    />
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
                    {loading ? " (loading...)" : ""}
                    {error ? ` (error: ${error})` : ""}
                </p>
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Team Directory</h2>
                <ul className="contacts__list">
                    {contacts.map((contact) => (
                        <li key={contact.id} className="contact-card">
                            <img 
                                src={contact.photo} 
                                alt={`${contact.name} profile photo`}
                                className="contact-card__photo"
                            />
                            <div className="contact-card__info">
                                <h3 className="contact-card__name">{contact.name}</h3>
                                <p className="contact-card__phone">{contact.phone}</p>
                                <p className="contact-card__email">{contact.email}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="form" aria-labelledby="form-heading">
                <h2 id="form-heading">Add a Contact</h2>
                <form className="form__body" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            minLength={2}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            inputMode="tel"
                            placeholder="(555) 555-5555"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="form__actions">
                        <button className="btn" type="submit" data-testid="btn-add">
                            Add Contact
                        </button>
                    </div>
                </form>
            </section>

            <footer className="page__footer">
                <small>
                    Starter provided. Complete tasks per README and make this page
                    shine.
                </small>
            </footer>
        </main>
    );
};

export default App;
