tailwind.config= {
	theme: {
	  fontFamily:{sans:["Inter"]},
	  extend: {
		colors:{
		  primary:"#271a2d",
		  light:"#3d3142",
		  secondary:"#7c26c8"
		}
		// ...
	  },
	},
	plugins: [],
  }
  (function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);