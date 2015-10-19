import Ember from 'ember';

export default Ember.TextField.extend({
  didInsertElement: function () {
    var fm_options = {
      position: "right-bottom",
      name_required: true,
      message_placeholder: "Type your feedback here.",
      message_required: true,
      feedback_url: "/application/feedback",
      submit_label: "Send",
      close_on_click_outside: "true",
      delayed_options: {
        send_fail: "Sending failed :(.",
        send_success: "Thanks for your feedback!"
      }
    };
    fm.init(fm_options);

  }

});

