import { useState, useEffect } from 'preact/hooks';

export default function CodeAnimation() {
	const [text, setText] = useState('');
	const [cursorVisible, setCursorVisible] = useState(true);
	const [phraseIndex, setPhraseIndex] = useState(0);

	const phrases = [
		'console.log("Welcome to Radical Software");',
		'git commit -m "learning new things"',
		'npm install creativity',
		'const ideas = await brainstorm();',
		'// Building the future, one line at a time'
	];

	useEffect(() => {
		const currentPhrase = phrases[phraseIndex];
		let charIndex = 0;
		let isDeleting = false;
		let timeout: number;

		const type = () => {
			if (!isDeleting && charIndex <= currentPhrase.length) {
				setText(currentPhrase.substring(0, charIndex));
				charIndex++;
				timeout = setTimeout(type, 50 + Math.random() * 50) as unknown as number;
			} else if (!isDeleting && charIndex > currentPhrase.length) {
				setTimeout(() => {
					isDeleting = true;
					type();
				}, 2000);
			} else if (isDeleting && charIndex > 0) {
				charIndex--;
				setText(currentPhrase.substring(0, charIndex));
				timeout = setTimeout(type, 30) as unknown as number;
			} else if (isDeleting && charIndex === 0) {
				isDeleting = false;
				setPhraseIndex((prev) => (prev + 1) % phrases.length);
			}
		};

		type();

		return () => clearTimeout(timeout);
	}, [phraseIndex]);

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setCursorVisible((prev) => !prev);
		}, 530);

		return () => clearInterval(cursorInterval);
	}, []);

	return (
		<div style={{
			padding: '2rem',
			backgroundColor: '#1e1e1e',
			borderRadius: '12px',
			boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
			maxWidth: '600px',
			margin: '2rem auto',
			fontFamily: '"Fira Code", "Courier New", monospace',
			minHeight: '100px',
		}}>
			<div style={{
				display: 'flex',
				gap: '8px',
				marginBottom: '1rem',
			}}>
				<div style={{
					width: '12px',
					height: '12px',
					borderRadius: '50%',
					backgroundColor: '#ff5f56',
				}} />
				<div style={{
					width: '12px',
					height: '12px',
					borderRadius: '50%',
					backgroundColor: '#ffbd2e',
				}} />
				<div style={{
					width: '12px',
					height: '12px',
					borderRadius: '50%',
					backgroundColor: '#27c93f',
				}} />
			</div>
			<div style={{
				color: '#d4d4d4',
				fontSize: '1.1rem',
				lineHeight: '1.6',
				minHeight: '1.8em',
			}}>
				<span style={{ color: '#9cdcfe' }}>{'> '}</span>
				<span style={{ color: '#ce9178' }}>{text}</span>
				<span style={{
					opacity: cursorVisible ? 1 : 0,
					color: '#d4d4d4',
					transition: 'opacity 0.1s',
				}}>▊</span>
			</div>
		</div>
	);
}
