/***********************************************
Jquery Live Link Preview Plugin:: Created by Alan Phoon (http://www.ampedupdesigns.com)
This notice MUST stay intact for legal use.
***********************************************/
(function($) {
  $.fn.extend({
     livePreview: function(options){
         var defaults = {
             targetWidth : 1000,
             targetHeight: 800,
             viewWidth: 300,
             viewHeight: 200,
             position: 'right',
             positionOffset: 50
         }
         var options = $.extend(defaults, options);
         //calculate appropriate scaling based on width.
         var scale_w = (options.viewWidth / options.targetWidth);
         var scale_h = (options.viewHeight / options.targetHeight);
         var scale_f = 1;
         if(typeof options.scale != 'undefined')
             scale_f = options.scale;
         else
         {
             if(scale_w > scale_h)
                 scale_f = scale_w;
             else
                 scale_f = scale_h;
         }
         return this.each(function() {
            var o = options;
            var s = scale_f;
            var obj = $(this);
            var href = $(this).attr("href");
            
            obj.hover(function() {
                var pos = $(this).offset();
                var width = $(this).width();
                var leftpos = pos.left + width + o.positionOffset;
                if(o.position == 'left')
                    leftpos = pos.left - o.viewWidth - o.positionOffset;
                var toppos = pos.top - (o.viewHeight/2);
                //hover on 
                $('body').append('<div id="livepreview_dialog" style="display:none; padding:0px; border-radius:5px; left: ' + leftpos + 'px; top:' + toppos + 'px; width: ' + o.viewWidth + 'px; height: ' + o.viewHeight + 'px"><iframe id="livepreview_iframe" src="' + href + '" style="border-radius:5px; -moz-border-radius: 5px; height:' + o.targetHeight + 'px; width:' + o.targetWidth + 'px;-moz-transform: scale('+ s + ');-moz-transform-origin: 0 0;-o-transform: scale('+ s + ');-o-transform-origin: 0 0;-webkit-transform: scale('+ s + ');-webkit-transform-origin: 0 0;"></iframe></div>');
                $('#livepreview_dialog').fadeIn(100);
            },
            function() {
                //hover off
                $('#livepreview_dialog').fadeOut(100, function() {
                    $("#livepreview_dialog").remove();
                });
            });
         });
     }
  });
})(jQuery);
