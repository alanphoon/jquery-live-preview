<h1>Jquery Live Preview Plugin</h1>

<p>The Jquery Live Preview Plugin is a simple Jquery Plugin that allows you to see a <strong>live</strong> scaled preview of the site you are linking to prior to you clicking on it. </p>
<p>Use on any link (or dom element) by adding the corresponding css class, no more prepping preview images for hover over previews, let the user see exactly what they will see when they click on the link.</p>

<h2>Requirements</h2>
<ul>
    <li>Jquery must be loaded.</li>
    <li>Browsers that support CSS3 3D Transform properties (Chrome, Firefox, Safari, IE10+).</li>
</ul>

<h2>Notes</h2>
<p>This plugin essentially provides an iframe window which is scaled down inside a dialog window for preview.</p>

<h2>Usage</h2>
<p>Add a custom CSS class to the link (or element) you want to preview:</p>
<pre><code>&#60;a href="http://www.bing.com" target="_blank" class="livepreview"&#62;Hover over to preview, click to link!/&#60;/a&#62;</code></pre>
<p>Initialize and bind to your preferred CSS class after page load:</p>
<pre><code>$(".livepreview").livePreview();</code></pre>
<p>Make sure to add the CSS styling to the preview window:</p>
<pre><code>
    &#60;style&#62;
    #livepreview_dialog
    {
        padding:0px;
        height:200px;
        width:300px;
        background-color:#fff;
        background-image:url('/images/icon_loading.gif');
        background-repeat:no-repeat;
        background-position:center center;
        overflow:hidden;
        position:absolute;
    }
    &#60;/script&#62;
</code>
</pre>

<p>That's it! See example for more usage.</p>
