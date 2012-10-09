<h1>Jquery Live Preview Plugin</h1>

<p>The Jquery Live Preview Plugin is a simple Jquery Plugin that allows you to see a <strong>live</strong> scaled preview of the site you are linking to prior to you clicking on it. </p>
<p>Use on any link (or DOM element with a href attribute) by adding the corresponding css class, no more prepping preview images for user hover-over previews; let the user see exactly what they will see when they click on the link.</p>

<h2>Requirements</h2>
<ul>
    <li>Jquery must be loaded.</li>
    <li>Browsers that support CSS3 3D Transform properties (Chrome, Firefox, Safari, IE10+).</li>
</ul>


<h2>Usage</h2>
<p>Add a custom CSS class to the link (or DOM element with an added <i>href</i> attribute) you want to preview:</p>
<pre><code>&#60;a href="http://www.bing.com" target="_blank" <strong>class="livepreview"</strong>&#62;Hover over to preview, click to link!/&#60;/a&#62;</code></pre>
<p>Initialize and bind to your preferred CSS class on page ready:</p>
<pre><code>$(".livepreview").livePreview();</code></pre>
<p>Make sure to add the CSS styling for the preview window (feel free to make it your own look):</p>
<pre><code>
    <style>
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
    </style>
</code>
</pre>

<h2>Configuring</h2>
<p>There are five <i>optional</i> configurable options on initialization :</p>
<pre><code>

$(".livepreview").livePreview({
    viewWidth: '300',  
    viewHeight: '200',  
    targetWidth: '1000',  
    targetHeight: '800',  
    scale: '0.5', 
});

</code></pre>
<p>Options:</p>
<ul>
    <li><strong>viewWidth</strong> :: the preview dialog width,  default = 300px</li>
    <li><strong>viewHeight</strong> :: the preview dialog height,  default = 200px</li>
    <li><strong>targetWidth</strong> :: the viewport size width of the site you are previewing, default = 1000px</li>
    <li><strong>targetHeight</strong> :: the viewport size height of the site you are previewing, default = 800px</li>
    <li><strong>scale</strong> :: the scaling of the viewport size (this is the CSS transform scale property),  default = calculated automatically <br/>
    Notes: If no scaling is specified, then the scaling is automatically calculated to provide the best fit to the preview dialog window size.</li>
</ul>


<p>That's it! See example for more usage.</p>

