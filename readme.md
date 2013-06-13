<h1>Jquery Live Link Preview Plugin</h1>

<p>The Jquery Live Link Preview Plugin is a simple Jquery Plugin that allows you to see a <strong>live</strong> scaled preview of the site you are linking to in a pop-up dialog style window prior to you clicking on it. </p>
<p>Use on any link (or DOM element with a href attribute) by adding the corresponding css class, no more prepping preview images for user hover-over previews; let the user see exactly what they will see before they click on the link.</p>

<h2>Requirements</h2>
<ul>
    <li>Jquery must be loaded.</li>
    <li>Modern Browsers that support CSS3 3D Transform properties (Chrome, Firefox, Safari, IE10+).</li>
</ul>

<h2>Limitations</h2>
<p>Certain sites may have set their X-FRAME-OPTIONS header policy to SAMEORGIN or DENY.  This is specifically to prevent other sites from iframing their site for obvious reasons.  If that is the case, this plugin will not work, and it's best to respect the site owner's wishes. </p>

<h2>Usage</h2>
<p>Add a custom CSS class to the link (or DOM element with an added <i>href</i> attribute) you want to preview:</p>
<pre><code>&#60;a href="http://www.bing.com" target="_blank" <strong>class="livepreview"</strong>&#62;Hover over to preview, click to link!/&#60;/a&#62;</code></pre>
<p>Initialize and bind to your preferred CSS class on page ready:</p>
<pre><code>$(".livepreview").livePreview();</code></pre>
<p>Make sure to add the CSS styling for the preview dialog window (feel free to make it your own look):</p>
<pre><code>#livepreview_dialog
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
    }</code>
</pre>

<h2>Configuring</h2>
<p>There are seven <i>optional</i> configurable options on initialization :</p>
<pre><code>$(".livepreview").livePreview({
    viewWidth: 300,  
    viewHeight: 200,  
    targetWidth: 1000,  
    targetHeight: 800,  
    scale: '0.5', 
    offset: 50,
    position: 'left'
});</code></pre>
<ul>
    <li><strong>viewWidth</strong> :: the preview dialog width,  default = 300px</li>
    <li><strong>viewHeight</strong> :: the preview dialog height,  default = 200px</li>
    <li><strong>targetWidth</strong> :: the viewport size width of the site you are previewing, default = 1000px</li>
    <li><strong>targetHeight</strong> :: the viewport size height of the site you are previewing, default = 800px</li>
    <li><strong>scale</strong> :: the scaling of the viewport size of the site you are previewing (this is the CSS transform scale property),  default = calculated automatically. Notes: If no scaling is specified, then the scaling is automatically calculated to provide the best fit to the preview dialog window size.</li>
    <li><strong>offset</strong> :: the offset from the target in pixels, default = 50px</li>
    <li><strong>position</strong> :: side to which the preview will open, left or right, default = right</li>
</ul>

<h2>Notes</h2>
<p>- When this plugin is triggered (via the hover over event), the preview dialog is added to the body and the iframe is created using the href attribute of the element.  This means that you can add the appropriate class to any DOM element so long as the href attribute is present:</p>
<pre><code>&lt;button class="livepreview" href="http://www.google.com"&gt;Hover over me!&lt;/button&gt;
&lt;img class="livepreview" src="/images/someimage.jpg" href="http://www.yahoo.com" /&gt;</code></pre>
<p>- For now, please note that the preview dialog that is dynamically created has a fixed <strong>id</strong> name of <i>livepreview_dialog</i><br/>
- For proper usage, detect if the browser can support css3 3d transforms, Modernizr is a great js library that provides this functionality.</p>
<p>That's it! See <a href="http://www.ampedupdesigns.com/blog/show?bid=49">example here</a> for usage.</p>

