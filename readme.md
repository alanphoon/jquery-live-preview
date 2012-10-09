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
<p>Initialize and bind to your preferred CSS class:</p>
<pre><code>$(".livepreview").livePreview();</code></pre>
<p>Add the CSS class to the link you want to preview:</p>
<pre><code><a href="http://www.bing.com" target="_blank" class="livepreview">Hover over to preview, click to link!</a></code></pre>
<p>Make sure to add the CSS styling to the preview window:</p>
<pre><code>
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
</code>
</pre>
