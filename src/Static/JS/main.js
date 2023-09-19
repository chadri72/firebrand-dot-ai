alert(1)

class FB-Header extends HTMLElement {
	connectedCallback () {
		this.innerHTML = '
			<div class="row">
				<div class="col-md-12 logo" style="padding:0px;">

				  <section class="top-nav">
					<div>
						<a href="index.html" style="text-decoration:none;">
							<image src="Static/Images/fb-logo-black.svg"></image>
						</a>						
					</div>
					<input id="menu-toggle" type="checkbox" />
					<label class='menu-button-container' for="menu-toggle">
					<div class='menu-button'></div>
				  </label>
					<ul class="menu">
					  <li class="nav-section"><a href="offerings.html">Offerings</a></li>
					  <li class="nav-section"><a href="impact.html">Impact</a></li>
					  <li class="nav-section"><a href="insights.html">Insights</a></li>
					  <li class="nav-section"><a href="about.html">About</a></li>
					  <li class="teal-nav-button"><a href="mailto:info@catchfire.ai">Contact</a></li>
					</ul>
				  </section>
				 </div>
			</div>
		'
	}
}
customElements.define('FB-header', FB-Header)