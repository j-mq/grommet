'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Video) {
  var DocumentedVideo = (0, _reactDesc.describe)(Video).description('A video player.').usage('import { Video } from \'grommet\';\n    <Video/>');

  DocumentedVideo.propTypes = {
    autoPlay: _reactDesc.PropTypes.bool.description('Enables automatic playback of the video as soon as it is loaded.'),
    controls: _reactDesc.PropTypes.oneOf([false, 'over', 'below']).description('Whether to show playback controls and where to place them.').defaultProp('over'),
    fit: _reactDesc.PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.'),
    loop: _reactDesc.PropTypes.bool.description('Enables continuous video looping.'),
    mute: _reactDesc.PropTypes.bool.description('Enables video muting. This option is best used with the autoPlay flag')
  };

  return DocumentedVideo;
};