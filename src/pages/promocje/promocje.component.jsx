import React from 'react';
import './promocje.styles.scss';

const PromocjePage = () => {
	return (
		<div className="promocje-page">
			<h2>Promocje</h2>
			<div className="promocje-sekcje">
				<div className="sekcja">
					<h4>1. OFERTA DLA BIUR, FIRM I PUNKTÓW USŁUGOWYCH</h4>
					<p>Każda pizza 30% taniej. Oferta ważna w dostawie od poniedziałku do piątku do godz. 17:00.</p>
				</div>
				<div className="sekcja">
					<h4>2. KAŻDA PIZZA 10% TANIEJ</h4>
					<p>Przy zamówieniu jednej pizzy. Oferta ważna jest w dostawie przez cały tydzień</p>
				</div>
				<div className="sekcja">
					<h4>3. DRUGA PIZZA 50% TANIEJ</h4>
					<p>
						Dotyczy pizzy średniej lub dużej z min. 2 składnikami. Pizza dwuskładnikowa to sos, ser i dwa
						dowolne składniki. Promocją objęta jest pizza tańsza lub w tej samej cenie. Oferta ważna od
						poniedziałku do czwartku w dostawie a cały tydzień w lokalu.
					</p>
				</div>
				<div className="sekcja">
					<h4>4. ŚREDNIA PIZZA ZA 5 ZŁOTYCH</h4>
					<p>
						Zamów dużą pizzę z min. 3 składnikami i domów średnią pizzę do 2 składników za 5 złotych. Oferta
						ważna w dostawie w poniedziałki i wtorki.
					</p>
				</div>
				<div className="sekcja">
					<h4>5. DRUGA PIZZA 70% TANIEJ</h4>
					<p>
						Oferta ważna w dostawie od piątku do niedzieli, dotyczy pizzy średniej lub dużej z min. 2
						składnikami. Pizza dwuskładnikowa to sos, ser i dwa dowolne składniki. Promocją objęta jest
						pizza tańsza lub w tej samej cenie.
					</p>
				</div>
				<div className="sekcja">
					<h4>6. SOS GRATIS</h4>
					<p>
						Do każdej pizzy niezależnie od promocji – poinformuj obsługę o wybranym sosie (informację o
						gratisowym sosie przy zamówieniu on-line prosimy umieścić w uwagach do zamówienia).
					</p>
				</div>
				<div className="sekcja">
					<h4>7. 20% ZNIŻKI NA PIZZĘ DLA STUDENTÓW</h4>
					<p>
						Każda pizza 20% taniej. Oferta ważna jest tylko w lokalu za okazaniem ważnej legitymacji
						studenckiej.
					</p>
				</div>
				<div className="sekcja">
					<h4>8. 1L NAPOJU GRATIS</h4>
					<p>
						Do każdego zamówienia za minimum 65 złotych możesz otrzymać 1 litr Pepsi, Mirinda lub 7up gratis
						– prosimy o poinformowanie obsługi o chęci skorzystania z tej oferty (informację o gratisowym
						napoju przy zamówieniu on-line prosimy umieścić w uwagach do zamówienia).
					</p>
				</div>
			</div>
		</div>
	);
};

export default PromocjePage;
