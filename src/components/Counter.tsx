import { useState } from 'preact/hooks';

interface CounterProps {
	initialCount?: number;
	title?: string;
}

export default function Counter({ initialCount = 0, title = 'Counter' }: CounterProps) {
	const [count, setCount] = useState(initialCount);

	return (
		<div style={{
			padding: '1rem',
			border: '2px solid #4a90e2',
			borderRadius: '8px',
			textAlign: 'center',
			maxWidth: '300px',
			margin: '1rem auto',
			backgroundColor: '#f0f8ff',
		}}>
			<h3 style={{ margin: '0 0 1rem 0', color: '#2c3e50' }}>{title}</h3>
			<div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0', color: '#34495e' }}>
				{count}
			</div>
			<div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
				<button
					onClick={() => setCount(count - 1)}
					style={{
						padding: '0.5rem 1rem',
						fontSize: '1rem',
						backgroundColor: '#e74c3c',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					-
				</button>
				<button
					onClick={() => setCount(initialCount)}
					style={{
						padding: '0.5rem 1rem',
						fontSize: '1rem',
						backgroundColor: '#95a5a6',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					Reset
				</button>
				<button
					onClick={() => setCount(count + 1)}
					style={{
						padding: '0.5rem 1rem',
						fontSize: '1rem',
						backgroundColor: '#27ae60',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					+
				</button>
			</div>
			<p style={{
				marginTop: '1rem',
				fontSize: '0.85rem',
				color: '#7f8c8d',
				fontStyle: 'italic'
			}}>
				This is an interactive Preact component!
			</p>
		</div>
	);
}
