<?php

class HpBlogCommentFormjQueryValidation
{
	function hpRegister()
	{
		add_action( 'wp_enqueue_scripts', array( $this, 'hpCustomEnqueueScripts' ) );
	}

	// enqueue all our scripts and styles
	function hpCustomEnqueueScripts()
	{
		// create my own version codes	    
	    $myCssVer 	= date("ymd-Gis");
	    $myJsVer  	= date("ymd-Gis");

	    if( is_single() && comments_open() )
	    {
			wp_enqueue_style( 'hpPluginStyle', plugins_url( '/assets/css/hp-form-validation.css', __FILE__ ), true,   $myCssVer );
			wp_enqueue_script( 'hpPluginScript', plugins_url( '/assets/js/hp-form-validation.js',  __FILE__ ), array('jquery'), true, true, $myJsVer );
		}
	}
}