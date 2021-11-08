import { Link } from "react-router-dom";


export default function Footer() {

	return (
		<footer class="footer-distributed">

			<div class="footer-left">
				<h3>About <span>GA Club</span></h3>

				<p class="footer-links">
					<a href="https://github.com/AKeyframe">Alec K.</a>
					--
					<a href="https://github.com/bkboy21">Nir E. </a>
					--
					<a href="https://github.com/joshbolanos7">Josh B. </a>
				</p>

				<p class="footer-company-name">© 2021 GA CLUB and SNEAKERS Ltd.</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p>
						<span>
							10 E 21st St #2, New York, NY 10010
						</span>
					</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>(917) 722 0237</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@gaclub.com">support@gaclub.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					We offer high end sneakers at a competitive price the competition can't beat.</p>
				<div class="footer-icons">
					<a href="https://github.com/AKeyframe">Alec K. </a>
					|
					<a href="https://github.com/bkboy21">Nir E. </a>
					|
					<a href="https://github.com/joshbolanos7">Josh B. </a>
					{/* <a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-youtube"></i></a> */}
				</div>
			</div>
		</footer>
	);
}