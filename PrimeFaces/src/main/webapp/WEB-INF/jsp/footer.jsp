<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
.section-padding {
	padding: 15px 0 !important;
}
</style>
<footer class="footer-area section-padding text-right" style="margin-top: 30px;"
	id="footer">
	<div class="container">
		<div class="row p-0">
			<div class="col-lg-12">
				<div class="single-footer-widget mail-chimp">
					<h6 class="mb-20">شركاؤنا :</h6>
					<ul class="instafeed d-flex flex-wrap">
						<li style="width: 5%;"></li>
						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/GJU LOGO.PNG"
							alt="" style="width: 60px; height: 50px;"
							title="German Jordan University"></li>
						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/YU LOGO.png"
							alt="" style="width: 60px; height: 50px;"
							title="Yarmouk University"></li>
						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/JUST LOGO.png"
							alt="" style="width: 60px; height: 50px;" title="JUST"></li>
						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/MU LOGO.png"
							alt="" style="width: 60px; height: 50px;" title="MU"></li>

						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/ZU LOGO.png"
							alt="" style="width: 70px; height: 60px;"
							title="Zarqa University"></li>
						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/LTUC Logo.png"
							alt="" style="width: 60px; height: 50px;" title="LTUC Logo"></li>




						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/Nuffic LOGO.png"
							alt="" style="width: 60px; height: 50px;" title="Nuffic"></li>
						<li style="width: 10%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/DAAD LOGO.png"
							alt="" style="width: 60px; height: 50px;" title="DAAD"></li>

						<li style="width: 15%;"><img
							src="${pageContext.request.contextPath}/resources/acceptedAccount/img/QRTA Logo.png"
							alt="" style="width: 150px; height: 60px;" title="QRTA"></li>


					</ul>
				</div>
			</div>
		</div>
 	<div class="row p-1 ">
			<div class="col-lg-5 ">
				<div class="single-footer-widget">
					<h6>${rightFooterSide.getTitle() }:</h6>
					<p style="color: #c5c2c2;">${rightFooterSide.getFooter_desc() }</p>
				</div>
			</div>

			<div class="col-lg-2"></div>
			<div class="col-lg-5" >
				<div class="single-footer-widget">
					<h6>${leftFooterSide.getTitle() }:</h6>
					<p style="color: #c5c2c2;">${leftFooterSide.getFooter_desc() }</p>
					<p style="color: #c5c2c2;">تابعونا على مواقع التواصل الاجتماعي</p>
					<div class="footer-social d-flex align-items-center">
						<a href="https://www.facebook.com/EDUSYRIA/" target="_blank">
							<i class="fab fa-facebook-f"></i>
						</a> <a href="https://twitter.com/edu_syria" target="_blank"> <i
							class="fab fa-twitter"></i>
						</a> <a href="mailto:info@edu-jordan.eu" target="_blank"> <i
							class="fa fa-envelope"></i>
						</a> <a href="http://edu-syria.eu/ar/" target="_blank"> <i
							class="fas fa-globe"></i>
						</a>
					</div>
				</div>
			</div>
		</div>  
		<div
			class="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
			<p class="  footer-text m-0  " style="color: #c5c2c2;">
				<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
				Copyright &copy;
				<script>
					document.write(new Date().getFullYear());
				</script>
				EDU-SYRIA <span style="color: #ff9907;">|</span> Powered By Zarqa
				University
			</p>
		</div>
	</div>
</footer>
<!--================ End Footer Area =================-->

<script
	src="${pageContext.request.contextPath}/resources/acceptedAccount/vendors/jquery/jquery-3.2.1.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/acceptedAccount/vendors/bootstrap/bootstrap.bundle.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/acceptedAccount/vendors/owl-carousel/owl.carousel.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/acceptedAccount/js/jquery.ajaxchimp.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/acceptedAccount/js/mail-script.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/acceptedAccount/js/main.js"></script>
</body>
</html>