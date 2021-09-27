<?php

/**
* @package hpblogcommentformjqueryvalidation
*/
/*
	Plugin Name: Blog Comment Form jQuery Validation
	Plugin URI: https://wordpress.org/plugins/blog-comment-form-jquery-validation
	Description: This plugin used to blog comment form jquery validation
	Version: 1.0.0
	Author: Hitesh Prajapati
	Author URI: https://profiles.wordpress.org/hiteshvpra
	License: GPLv2 or later
	Text Domain: blog-comment-form-jquery-validation
*/
/*
	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


// Not access direct
defined( 'ABSPATH' ) or die();

// Check file is exitst or not
if( file_exists( __DIR__ . '/includes/hpclass.cls.php' ) )
{
	require_once __DIR__ . '/includes/hpclass.cls.php';
}

// create instance of object
if( class_exists( 'HpBlogCommentFormjQueryValidation' ) )
{
	$hpBlogCommentFormjQueryValidation = new HpBlogCommentFormjQueryValidation();
	$hpBlogCommentFormjQueryValidation->hpRegister();
}


