import { useState } from 'react'
import { useEffect } from 'react'
import { Card } from './components/createCard'
import './App.css'

function App() {
	const [cards, setCards] = useState([]);
	const [data, setData] = useState({
		name: "",
		description: "",
		interests: "",
		social: {}
	});

	useEffect(() => {
		fetch("http://localhost:3000/cards")
		.then((response) => response.json())
		.then((datum) => setCards(datum))
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newCard = {
			name: data.name,
			description: data.description,
			interests: data.interests.split(",").map((interest) => interest.trim()),
			social: data.social
		};

		fetch("http://localhost:3000/cards", {
			method: "POST",
			headers: {"Content-Type":"application/json"},
			body: JSON.stringify(newCard)
		})
		.then((response) => response.json())
		.then((datum) => setCards([...cards, datum]));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		
		if (name.startsWith("social.")) {
			const key = name.split(".")[1];

			setData((prevData) => ({
				...prevData,
				social: {
					...prevData.social,
					[key]: value
				}
			}));
		} else {
			setData((prevData) => ({...prevData, [name]: value }));
		}
	}

	return (
		<div>
			<h1>E-Business Cards</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={data.name}
						onChange={handleChange}
						style={{
							padding: "10px",
							margin: "10px 0",
							width: "100%",
							borderRadius: "5px",
							border: "1px solid #ccc",
							fontSize: "16px",
						  }}
						required
					/>
				</div>
				<div>
					<textarea
						name="description"
						placeholder="Short Description"
						value={data.description}
						onChange={handleChange}
						style={{
							padding: "10px",
							margin: "10px 0",
							width: "100%",
							borderRadius: "5px",
							border: "1px solid #ccc",
							fontSize: "16px",
							minHeight: "100px",
						  }}
						required
					/>
				</div>
				<div>
					<input
						type="text"
						name="interests"
						placeholder= "Interests (comma separated)"
						value={data.interests}
						onChange={handleChange}
						style={{
							padding: "10px",
							margin: "10px 0",
							width: "100%",
							borderRadius: "5px",
							border: "1px solid #ccc",
							fontSize: "16px",
						  }}
					/>
				</div>
				<div>
					<input
						type="text"
						name="social.LinkedIn"
						placeholder="LinkedIn URL"
						value={data.social.LinkedIn || ""}
						onChange={handleChange}
						style={{
							padding: "10px",
							margin: "10px 0",
							width: "100%",
							borderRadius: "5px",
							border: "1px solid #ccc",
							fontSize: "16px",
						  }}
					/>
					<input
						type="text"
						name="social.Twitter"
						placeholder="Twitter URL"
						value={data.social.Twitter || ""}
						onChange={handleChange}
						style={{
							padding: "10px",
							margin: "10px 0",
							width: "100%",
							borderRadius: "5px",
							border: "1px solid #ccc",
							fontSize: "16px",
						  }}
					/>
				</div>
				<div>
					<button 
						type="submit"
						style={{
							padding: "10px 20px",
							margin: "10px 0",
							borderRadius: "5px",
							border: "none",
							backgroundColor: "#007bff",
							color: "white",
							fontSize: "16px",
							cursor: "pointer",
						  }}
					>
						Add Card
					</button>
				</div>
			</form>
		</div>
	)
}

export default App
