import videojs from 'video.js';
import {version as VERSION} from '../package.json';

const Plugin = videojs.getPlugin('plugin');

// Default options for the plugin.
const defaults = {};

/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */
class S3BubbleSettingsMenu extends Plugin {

  /**
   * Create a S3BubbleSettingsMenu plugin instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js plugin architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your plugin's caller.
   */
  constructor(player, options) {
    // the parent class will add player under this.player
    super(player);

    this.options = videojs.mergeOptions(defaults, options);

    this.player.ready(() => {
      this.player.addClass('vjs-s3bubble-settings-menu');
    });
  }
}

// Define default values for the plugin's `state` object here.
S3BubbleSettingsMenu.defaultState = {};

// Include the version number.
S3BubbleSettingsMenu.VERSION = VERSION;

// Register the plugin with video.js.
videojs.registerPlugin('s3BubbleSettingsMenu', S3BubbleSettingsMenu);

export default S3BubbleSettingsMenu;
