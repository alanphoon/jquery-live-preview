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
<p>This plugin will work with Internet Explorer 10 and above.  Previous versions of IE do not support the CSS transform property used in this plugin. Suggestion is to use modernizr to disable this plugin if CSS transforms are not supported by the browser.</p>
<h2>Usage</h2>
<p>Add the live preview plugin to your &#60;head&#62; tag or before the closing &#60;body&#62; tag:</p>
<pre><code>&#60;script type="text/javascript" src="/js/jquery-live-preview.js"&#62;&#60;/script&#62;
</code></pre>
<p>Make sure to add the CSS styling for the preview dialog window in your head:</p>
<pre><code>&#60;link href="/css/livepreview-demo.css" rel="stylesheet" type="text/css"&#62;
</code></pre>
<p><em>The styles included are default styles for the live preview window that pops up to display the live preview only.  You may modify this to make it more custom to your site if you wish.</em></p>
<p>Add a custom CSS class to the link (or DOM element with an added <i>href</i> attribute) you want to preview:</p>
<pre><code>&#60;a href="http://www.bing.com" target="_blank" <strong>class="livepreview"</strong>&#62;Hover over to preview, click to link!/&#60;/a&#62;</code></pre>
<p>Initialize and bind to the CSS class you used above on page ready:</p>
<pre><code>$(document).ready(function() { 
  $(".livepreview").livePreview();
});
</code></pre>

<h2>Configuring</h2>
<p>There are seven <i>optional</i> configurable options on initialization :</p>
<pre><code>$(".livepreview").livePreview({
    trigger: 'hover',
    viewWidth: 300,  
    viewHeight: 200,  
    targetWidth: 1000,  
    targetHeight: 800,  
    scale: '0.5', 
    offset: 50,
    position: 'left'
});</code></pre>
<ul>
    <li><strong>trigger</strong> :: trigger event, 'hover' or 'click', default = 'hover'</li>
    <li><strong>viewWidth</strong> :: the preview dialog width,  default = 300px</li>
    <li><strong>viewHeight</strong> :: the preview dialog height,  default = 200px</li>
    <li><strong>targetWidth</strong> :: the viewport size width of the site you are previewing, default = 1000px</li>
    <li><strong>targetHeight</strong> :: the viewport size height of the site you are previewing, default = 800px</li>
    <li><strong>scale</strong> :: the scaling of the viewport size of the site you are previewing (this is the CSS transform scale property),  default = calculated automatically. Notes: If no scaling is specified, then the scaling is automatically calculated to provide the best fit to the preview dialog window size.</li>
    <li><strong>offset</strong> :: the offset from the target in pixels, default = 50px</li>
    <li><strong>position</strong> :: side to which the preview will open, left or right, default = right</li>
</ul>

<h3>Inline Data Attributes</h3>
<p>The following data attributes may be used inline and will override any initialized or default settings:</p>
<ul>
    <li><strong>data-trigger</strong> :: overrides trigger setting</li>
    <li><strong>data-offset</strong> :: overrides offset setting</li>
    <li><strong>data-position</strong> :: overrides the position placement setting</li>
    <li><strong>data-scale</strong> :: overrides the scale setting</li>
    <li><strong>data-preview-url</strong> :: overrides url to show in the preview instead of the href attr</li>
</ul>
<p>Example:</p>
<pre><code>&#60;a href="http://www.cnn.com" class="livepreview" data-offset="20" data-position="left" &#62;Hover over this link&#60;/a&#62;</pre></code>
<p>The above will make sure that the live preview window is position to the left of the link and using an offset of 20px only.</p>
<h2>Notes</h2>
<p>- The plugin can be triggered via a hover or click event.  On a hover event, when the user hovers over the element, the preview will show.  On a click event, when the user clicks on the element, the preview will show. Clicking again on the element while the preview is open will trigger the default event of that element (for example, if its a link, it will go to that link).  On both events, when the user hovers away from the element, the preview will close.
<p>- When this plugin is triggered, the preview dialog is added to the body and the iframe is created using the href attribute of the element.  This means that you can add the appropriate class to any DOM element so long as the href attribute is present:</p>
<pre><code>&lt;button class="livepreview" href="http://www.google.com"&gt;Hover over me!&lt;/button&gt;
&lt;img class="livepreview" src="/images/someimage.jpg" href="http://www.yahoo.com" /&gt;</code></pre>
<p>- For now, please note that the preview dialog that is dynamically created has a fixed <strong>id</strong> name of <i>livepreview_dialog</i><br/>
- For proper usage, detect if the browser can support css3 3d transforms, Modernizr is a great js library that provides this functionality.</p>
<p>That's it! See <a href="http://www.ampedupdesigns.com/blog/show?bid=49">example here</a> for usage.</p>

