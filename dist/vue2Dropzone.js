! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["vue2-dropzone"] = t() : e["vue2-dropzone"] = t()
}(this, function () {
  return function (e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
  }([function (e, t, i) {
    var n, r, o = {};
    i(8), n = i(2), r = i(6), e.exports = n || {}, e.exports.__esModule && (e.exports = e.exports["default"]);
    var s = "function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function (e) {
      var t = o[e];
      s.computed[e] = function () {
        return t
      }
    })
  }, function (e, t) {
    e.exports = function () {
      var e = [];
      return e.toString = function () {
        for (var e = [], t = 0; t < this.length; t++) {
          var i = this[t];
          i[2] ? e.push("@media " + i[2] + "{" + i[1] + "}") : e.push(i[1])
        }
        return e.join("")
      }, e.i = function (t, i) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var n = {}, r = 0; r < this.length; r++) {
          var o = this[r][0];
          "number" == typeof o && (n[o] = !0)
        }
        for (r = 0; r < t.length; r++) {
          var s = t[r];
          "number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), e.push(s))
        }
      }, e
    }
  }, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(5);
    n.autoDiscover = !1, t["default"] = {
      props: {
        id: {
          type: String,
          required: !0
        },
        url: {
          type: String,
          required: !0
        },
        clickable: {
          type: Boolean,
          "default": !0
        },
        acceptedFileTypes: {
          type: String
        },
        thumbnailHeight: {
          type: Number,
          "default": 200
        },
        thumbnailWidth: {
          type: Number,
          "default": 200
        },
        showRemoveLink: {
          type: Boolean,
          "default": !0
        },
        maxFileSizeInMB: {
          type: Number,
          "default": 2
        },
        maxNumberOfFiles: {
          type: Number,
          "default": 5
        },
        autoProcessQueue: {
          type: Boolean,
          "default": !0
        },
        useFontAwesome: {
          type: Boolean,
          "default": !1
        },
        useCustomDropzoneOptions: {
          type: Boolean,
          "default": !1
        },
        dropzoneOptions: {
          type: Object
        }
      },
      methods: {
        removeAllFiles: function () {
          this.dropzone.removeAllFiles(!0)
        },
        processQueue: function () {
          this.dropzone.processQueue()
        }
      },
      computed: {
        cloudIcon: function () {
          return this.useFontAwesome ? '<i class="fa fa-cloud-upload"></i>' : '<i class="material-icons">cloud_upload</i>'
        },
        doneIcon: function () {
          return this.useFontAwesome ? '<i class="fa fa-check"></i>' : ' <i class="material-icons">done</i>'
        },
        errorIcon: function () {
          return this.useFontAwesome ? '<i class="fa fa-close"></i>' : ' <i class="material-icons">error</i>'
        }
      },
      mounted: function () {
        var e = document.getElementById(this.id);
        this.useCustomDropzoneOptions ? this.dropzone = new n(e, this.dropzoneOptions) : this.dropzone = new n(e, {
          clickable: this.clickable,
          thumbnailWidth: this.thumbnailWidth,
          thumbnailHeight: this.thumbnailHeight,
          maxFiles: this.maxNumberOfFiles,
          maxFilesize: this.maxFileSizeInMB,
          dictRemoveFile: "Remove",
          addRemoveLinks: this.showRemoveLink,
          acceptedFiles: this.acceptedFileTypes,
          autoProcessQueue: this.autoProcessQueue,
          dictDefaultMessage: this.cloudIcon + "<br>Drop files here to upload",
          previewTemplate: '<div class="dz-preview dz-file-preview">  <div class="dz-image" style="width:' + this.thumbnailWidth + "px;height:" + this.thumbnailHeight + 'px"><img data-dz-thumbnail /></div>  <div class="dz-details">    <div class="dz-size"><span data-dz-size></span></div>    <div class="dz-filename"><span data-dz-name></span></div>  </div>  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>  <div class="dz-error-message"><span data-dz-errormessage></span></div>  <div class="dz-success-mark">' + this.doneIcon + ' </div>  <div class="dz-error-mark' + this.errorIcon + "</div></div>"
        });
        var t = this;
        this.dropzone.on("addedfile", function (e) {
          t.$emit("vdropzone-fileAdded", e)
        }), this.dropzone.on("removedfile", function (e) {
          t.$emit("vdropzone-removedFile", e)
        }), this.dropzone.on("success", function (e, i) {
          t.$emit("vdropzone-success", e, i)
        }), this.dropzone.on("error", function (e, i, n) {
          t.$emit("vdropzone-error", e, i, n)
        })
      }
    }
  }, function (e, t, i) {
    t = e.exports = i(1)(), t.push([e.id, "@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(180deg,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid hsla(0,0%,78%,.8);background-color:hsla(0,0%,100%,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:hsla(0,0%,100%,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;-webkit-transition:all .2s linear;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;-webkit-transition:opacity .4s ease-in;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:hsla(0,0%,100%,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(180deg,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;-webkit-transition:width .3s ease-in-out;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(180deg,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:'';position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}", ""])
  }, function (e, t, i) {
    t = e.exports = i(1)(), t.i(i(3), ""), t.push([e.id, "html{background-color:#f9f9f9}.dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;-webkit-transition:background-color .2s linear;transition:background-color .2s linear}.dropzone:hover{background-color:#f6f6f6}.dropzone i{color:#ccc}.dropzone .dz-preview .dz-image{border-radius:0}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:none;transform:none;-webkit-filter:none}.dropzone .dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);-webkit-transition:opacity .2s linear;transition:opacity .2s linear;text-align:left}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:transparent}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.dropzone .dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.dropzone .dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px solid #fff;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.dropzone .dz-preview:hover .dz-remove{opacity:1}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{margin-left:-40px;margin-top:-50px}.dropzone .dz-preview .dz-error-mark i,.dropzone .dz-preview .dz-success-mark i{color:#fff;font-size:5rem}", ""])
  }, function (e, t, i) {
    (function (e) {
      (function () {
        var t, i, n, r, o, s, a, l, d = [].slice,
          p = {}.hasOwnProperty,
          u = function (e, t) {
            function i() {
              this.constructor = e
            }
            for (var n in t) p.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
          };
        a = function () {}, i = function () {
          function e() {}
          return e.prototype.addEventListener = e.prototype.on, e.prototype.on = function (e, t) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
          }, e.prototype.emit = function () {
            var e, t, i, n, r, o;
            if (n = arguments[0], e = 2 <= arguments.length ? d.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, i = this._callbacks[n])
              for (r = 0, o = i.length; r < o; r++) t = i[r], t.apply(this, e);
            return this
          }, e.prototype.removeListener = e.prototype.off, e.prototype.removeAllListeners = e.prototype.off, e.prototype.removeEventListener = e.prototype.off, e.prototype.off = function (e, t) {
            var i, n, r, o, s;
            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
            if (n = this._callbacks[e], !n) return this;
            if (1 === arguments.length) return delete this._callbacks[e], this;
            for (r = o = 0, s = n.length; o < s; r = ++o)
              if (i = n[r], i === t) {
                n.splice(r, 1);
                break
              }
            return this
          }, e
        }(), t = function (e) {
          function t(e, i) {
            var r, o, s;
            if (this.element = e, this.version = t.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
            if (this.element.dropzone) throw new Error("Dropzone already attached.");
            if (t.instances.push(this), this.element.dropzone = this, r = null != (s = t.optionsForElement(this.element)) ? s : {}, this.options = n({}, this.defaultOptions, r, null != i ? i : {}), this.options.forceFallback || !t.isBrowserSupported()) return this.options.fallback.call(this);
            // options.urlの初期値はなくてもいいように変更する
            // if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (o = this.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = t.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [this.element] : this.clickableElements = t.getElements(this.options.clickable, "clickable")), this.init()
          }
          var n, r;
          return u(t, e), t.prototype.Emitter = i, t.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], t.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1e3,
            maxFiles: null,
            params: {},
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function (e, t) {
              return t()
            },
            init: function () {
              return a
            },
            forceFallback: !1,
            fallback: function () {
              var e, i, n, r, o, s;
              for (this.element.className = "" + this.element.className + " dz-browser-not-supported", s = this.element.getElementsByTagName("div"), r = 0, o = s.length; r < o; r++) e = s[r], /(^| )dz-message($| )/.test(e.className) && (i = e, e.className = "dz-message");
              return i || (i = t.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(i)), n = i.getElementsByTagName("span")[0], n && (null != n.textContent ? n.textContent = this.options.dictFallbackMessage : null != n.innerText && (n.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
            },
            resize: function (e) {
              var t, i, n;
              return t = {
                srcX: 0,
                srcY: 0,
                srcWidth: e.width,
                srcHeight: e.height
              }, i = e.width / e.height, t.optWidth = this.options.thumbnailWidth, t.optHeight = this.options.thumbnailHeight, null == t.optWidth && null == t.optHeight ? (t.optWidth = t.srcWidth, t.optHeight = t.srcHeight) : null == t.optWidth ? t.optWidth = i * t.optHeight : null == t.optHeight && (t.optHeight = 1 / i * t.optWidth), n = t.optWidth / t.optHeight, e.height < t.optHeight || e.width < t.optWidth ? (t.trgHeight = t.srcHeight, t.trgWidth = t.srcWidth) : i > n ? (t.srcHeight = e.height, t.srcWidth = t.srcHeight * n) : (t.srcWidth = e.width, t.srcHeight = t.srcWidth / n), t.srcX = (e.width - t.srcWidth) / 2, t.srcY = (e.height - t.srcHeight) / 2, t
            },
            drop: function (e) {
              return this.element.classList.remove("dz-drag-hover")
            },
            dragstart: a,
            dragend: function (e) {
              return this.element.classList.remove("dz-drag-hover")
            },
            dragenter: function (e) {
              return this.element.classList.add("dz-drag-hover")
            },
            dragover: function (e) {
              return this.element.classList.add("dz-drag-hover")
            },
            dragleave: function (e) {
              return this.element.classList.remove("dz-drag-hover")
            },
            paste: a,
            reset: function () {
              return this.element.classList.remove("dz-started")
            },
            addedfile: function (e) {
              var i, n, r, o, s, a, l, d, p, u, c, h, f;
              if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                for (e.previewElement = t.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement), u = e.previewElement.querySelectorAll("[data-dz-name]"), o = 0, l = u.length; o < l; o++) i = u[o], i.textContent = this._renameFilename(e.name);
                for (c = e.previewElement.querySelectorAll("[data-dz-size]"), s = 0, d = c.length; s < d; s++) i = c[s], i.innerHTML = this.filesize(e.size);
                for (this.options.addRemoveLinks && (e._removeLink = t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink)), n = function (i) {
                    return function (n) {
                      return n.preventDefault(), n.stopPropagation(), e.status === t.UPLOADING ? t.confirm(i.options.dictCancelUploadConfirmation, function () {
                        return i.removeFile(e)
                      }) : i.options.dictRemoveFileConfirmation ? t.confirm(i.options.dictRemoveFileConfirmation, function () {
                        return i.removeFile(e)
                      }) : i.removeFile(e)
                    }
                  }(this), h = e.previewElement.querySelectorAll("[data-dz-remove]"), f = [], a = 0, p = h.length; a < p; a++) r = h[a], f.push(r.addEventListener("click", n));
                return f
              }
            },
            removedfile: function (e) {
              var t;
              return e.previewElement && null != (t = e.previewElement) && t.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
            },
            thumbnail: function (e, t) {
              var i, n, r, o;
              if (e.previewElement) {
                for (e.previewElement.classList.remove("dz-file-preview"), o = e.previewElement.querySelectorAll("[data-dz-thumbnail]"), n = 0, r = o.length; n < r; n++) i = o[n], i.alt = e.name, i.src = t;
                return setTimeout(function (t) {
                  return function () {
                    return e.previewElement.classList.add("dz-image-preview")
                  }
                }(this), 1)
              }
            },
            error: function (e, t) {
              var i, n, r, o, s;
              if (e.previewElement) {
                for (e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error), o = e.previewElement.querySelectorAll("[data-dz-errormessage]"), s = [], n = 0, r = o.length; n < r; n++) i = o[n], s.push(i.textContent = t);
                return s
              }
            },
            errormultiple: a,
            processing: function (e) {
              if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.textContent = this.options.dictCancelUpload
            },
            processingmultiple: a,
            uploadprogress: function (e, t, i) {
              var n, r, o, s, a;
              if (e.previewElement) {
                for (s = e.previewElement.querySelectorAll("[data-dz-uploadprogress]"), a = [], r = 0, o = s.length; r < o; r++) n = s[r], "PROGRESS" === n.nodeName ? a.push(n.value = t) : a.push(n.style.width = "" + t + "%");
                return a
              }
            },
            totaluploadprogress: a,
            sending: a,
            sendingmultiple: a,
            success: function (e) {
              if (e.previewElement) return e.previewElement.classList.add("dz-success")
            },
            successmultiple: a,
            canceled: function (e) {
              return this.emit("error", e, "Upload canceled.")
            },
            canceledmultiple: a,
            complete: function (e) {
              if (e._removeLink && (e._removeLink.textContent = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
            },
            completemultiple: a,
            maxfilesexceeded: a,
            maxfilesreached: a,
            queuecomplete: a,
            addedfiles: a,
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
          }, n = function () {
            var e, t, i, n, r, o, s;
            for (n = arguments[0], i = 2 <= arguments.length ? d.call(arguments, 1) : [], o = 0, s = i.length; o < s; o++) {
              t = i[o];
              for (e in t) r = t[e], n[e] = r
            }
            return n
          }, t.prototype.getAcceptedFiles = function () {
            var e, t, i, n, r;
            for (n = this.files, r = [], t = 0, i = n.length; t < i; t++) e = n[t], e.accepted && r.push(e);
            return r
          }, t.prototype.getRejectedFiles = function () {
            var e, t, i, n, r;
            for (n = this.files, r = [], t = 0, i = n.length; t < i; t++) e = n[t], e.accepted || r.push(e);
            return r
          }, t.prototype.getFilesWithStatus = function (e) {
            var t, i, n, r, o;
            for (r = this.files, o = [], i = 0, n = r.length; i < n; i++) t = r[i], t.status === e && o.push(t);
            return o
          }, t.prototype.getQueuedFiles = function () {
            return this.getFilesWithStatus(t.QUEUED)
          }, t.prototype.getUploadingFiles = function () {
            return this.getFilesWithStatus(t.UPLOADING)
          }, t.prototype.getAddedFiles = function () {
            return this.getFilesWithStatus(t.ADDED)
          }, t.prototype.getActiveFiles = function () {
            var e, i, n, r, o;
            for (r = this.files, o = [], i = 0, n = r.length; i < n; i++) e = r[i], e.status !== t.UPLOADING && e.status !== t.QUEUED || o.push(e);
            return o
          }, t.prototype.init = function () {
            var e, i, n, r, o, s, a;
            for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (n = function (e) {
                return function () {
                  return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null == e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null != e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null != e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function () {
                    var t, i, r, o;
                    if (i = e.hiddenFileInput.files, i.length)
                      for (r = 0, o = i.length; r < o; r++) t = i[r], e.addFile(t);
                    return e.emit("addedfiles", i), n()
                  })
                }
              }(this))(), this.URL = null != (s = window.URL) ? s : window.webkitURL, a = this.events, r = 0, o = a.length; r < o; r++) e = a[r], this.on(e, this.options[e]);
            return this.on("uploadprogress", function (e) {
              return function () {
                return e.updateTotalUploadProgress()
              }
            }(this)), this.on("removedfile", function (e) {
              return function () {
                return e.updateTotalUploadProgress()
              }
            }(this)), this.on("canceled", function (e) {
              return function (t) {
                return e.emit("complete", t)
              }
            }(this)), this.on("complete", function (e) {
              return function (t) {
                if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout(function () {
                  return e.emit("queuecomplete")
                }, 0)
              }
            }(this)), i = function (e) {
              return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }, this.listeners = [{
              element: this.element,
              events: {
                dragstart: function (e) {
                  return function (t) {
                    return e.emit("dragstart", t)
                  }
                }(this),
                dragenter: function (e) {
                  return function (t) {
                    return i(t), e.emit("dragenter", t)
                  }
                }(this),
                dragover: function (e) {
                  return function (t) {
                    var n;
                    try {
                      n = t.dataTransfer.effectAllowed
                    } catch (r) {}
                    return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", i(t), e.emit("dragover", t)
                  }
                }(this),
                dragleave: function (e) {
                  return function (t) {
                    return e.emit("dragleave", t)
                  }
                }(this),
                drop: function (e) {
                  return function (t) {
                    return i(t), e.drop(t)
                  }
                }(this),
                dragend: function (e) {
                  return function (t) {
                    return e.emit("dragend", t)
                  }
                }(this)
              }
            }], this.clickableElements.forEach(function (e) {
              return function (i) {
                return e.listeners.push({
                  element: i,
                  events: {
                    click: function (n) {
                      return (i !== e.element || n.target === e.element || t.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0
                    }
                  }
                })
              }
            }(this)), this.enable(), this.options.init.call(this)
          }, t.prototype.destroy = function () {
            var e;
            return this.disable(), this.removeAllFiles(!0), (null != (e = this.hiddenFileInput) ? e.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, t.instances.splice(t.instances.indexOf(this), 1)
          }, t.prototype.updateTotalUploadProgress = function () {
            var e, t, i, n, r, o, s, a;
            if (n = 0, i = 0, e = this.getActiveFiles(), e.length) {
              for (a = this.getActiveFiles(), o = 0, s = a.length; o < s; o++) t = a[o], n += t.upload.bytesSent, i += t.upload.total;
              r = 100 * n / i
            } else r = 100;
            return this.emit("totaluploadprogress", r, i, n)
          }, t.prototype._getParamName = function (e) {
            return "function" == typeof this.options.paramName ? this.options.paramName(e) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
          }, t.prototype._renameFilename = function (e) {
            return "function" != typeof this.options.renameFilename ? e : this.options.renameFilename(e)
          }, t.prototype.getFallbackForm = function () {
            var e, i, n, r;
            return (e = this.getExistingFallback()) ? e : (n = '<div class="dz-fallback">', this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', i = t.createElement(n), "FORM" !== this.element.tagName ? (r = t.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), r.appendChild(i)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != r ? r : i)
          }, t.prototype.getExistingFallback = function () {
            var e, t, i, n, r, o;
            for (t = function (e) {
                var t, i, n;
                for (i = 0, n = e.length; i < n; i++)
                  if (t = e[i], /(^| )fallback($| )/.test(t.className)) return t
              }, o = ["div", "form"], n = 0, r = o.length; n < r; n++)
              if (i = o[n], e = t(this.element.getElementsByTagName(i))) return e
          }, t.prototype.setupEventListeners = function () {
            var e, t, i, n, r, o, s;
            for (o = this.listeners, s = [], n = 0, r = o.length; n < r; n++) e = o[n], s.push(function () {
              var n, r;
              n = e.events, r = [];
              for (t in n) i = n[t], r.push(e.element.addEventListener(t, i, !1));
              return r
            }());
            return s
          }, t.prototype.removeEventListeners = function () {
            var e, t, i, n, r, o, s;
            for (o = this.listeners, s = [], n = 0, r = o.length; n < r; n++) e = o[n], s.push(function () {
              var n, r;
              n = e.events, r = [];
              for (t in n) i = n[t], r.push(e.element.removeEventListener(t, i, !1));
              return r
            }());
            return s
          }, t.prototype.disable = function () {
            var e, t, i, n, r;
            for (this.clickableElements.forEach(function (e) {
                return e.classList.remove("dz-clickable")
              }), this.removeEventListeners(), n = this.files, r = [], t = 0, i = n.length; t < i; t++) e = n[t], r.push(this.cancelUpload(e));
            return r
          }, t.prototype.enable = function () {
            return this.clickableElements.forEach(function (e) {
              return e.classList.add("dz-clickable")
            }), this.setupEventListeners()
          }, t.prototype.filesize = function (e) {
            var t, i, n, r, o, s, a, l;
            if (n = 0, r = "b", e > 0) {
              for (s = ["TB", "GB", "MB", "KB", "b"], i = a = 0, l = s.length; a < l; i = ++a)
                if (o = s[i], t = Math.pow(this.options.filesizeBase, 4 - i) / 10, e >= t) {
                  n = e / Math.pow(this.options.filesizeBase, 4 - i), r = o;
                  break
                }
              n = Math.round(10 * n) / 10
            }
            return "<strong>" + n + "</strong> " + r
          }, t.prototype._updateMaxFilesReachedClass = function () {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
          }, t.prototype.drop = function (e) {
            var t, i;
            e.dataTransfer && (this.emit("drop", e), t = e.dataTransfer.files, this.emit("addedfiles", t), t.length && (i = e.dataTransfer.items, i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t)))
          }, t.prototype.paste = function (e) {
            var t, i;
            if (null != (null != e && null != (i = e.clipboardData) ? i.items : void 0)) return this.emit("paste", e), t = e.clipboardData.items, t.length ? this._addFilesFromItems(t) : void 0
          }, t.prototype.handleFiles = function (e) {
            var t, i, n, r;
            for (r = [], i = 0, n = e.length; i < n; i++) t = e[i], r.push(this.addFile(t));
            return r
          }, t.prototype._addFilesFromItems = function (e) {
            var t, i, n, r, o;
            for (o = [], n = 0, r = e.length; n < r; n++) i = e[n], null != i.webkitGetAsEntry && (t = i.webkitGetAsEntry()) ? t.isFile ? o.push(this.addFile(i.getAsFile())) : t.isDirectory ? o.push(this._addFilesFromDirectory(t, t.name)) : o.push(void 0) : null != i.getAsFile && (null == i.kind || "file" === i.kind) ? o.push(this.addFile(i.getAsFile())) : o.push(void 0);
            return o
          }, t.prototype._addFilesFromDirectory = function (e, t) {
            var i, n, r;
            return i = e.createReader(), n = function (e) {
              return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(e) : void 0
            }, (r = function (e) {
              return function () {
                return i.readEntries(function (i) {
                  var n, o, s;
                  if (i.length > 0) {
                    for (o = 0, s = i.length; o < s; o++) n = i[o], n.isFile ? n.file(function (i) {
                      if (!e.options.ignoreHiddenFiles || "." !== i.name.substring(0, 1)) return i.fullPath = "" + t + "/" + i.name, e.addFile(i)
                    }) : n.isDirectory && e._addFilesFromDirectory(n, "" + t + "/" + n.name);
                    r()
                  }
                  return null
                }, n)
              }
            }(this))()
          }, t.prototype.accept = function (e, i) {
            return e.size > 1024 * this.options.maxFilesize * 1024 ? i(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : t.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, i) : i(this.options.dictInvalidFileType)
          }, t.prototype.addFile = function (e) {
            return e.upload = {
              progress: 0,
              total: e.size,
              bytesSent: 0
            }, this.files.push(e), e.status = t.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function (t) {
              return function (i) {
                return i ? (e.accepted = !1, t._errorProcessing([e], i)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass()
              }
            }(this))
          }, t.prototype.enqueueFiles = function (e) {
            var t, i, n;
            for (i = 0, n = e.length; i < n; i++) t = e[i], this.enqueueFile(t);
            return null
          }, t.prototype.enqueueFile = function (e) {
            if (e.status !== t.ADDED || e.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
            if (e.status = t.QUEUED, this.options.autoProcessQueue) return setTimeout(function (e) {
              return function () {
                return e.processQueue()
              }
            }(this), 0)
          }, t.prototype._thumbnailQueue = [], t.prototype._processingThumbnail = !1, t.prototype._enqueueThumbnail = function (e) {
            if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function (e) {
              return function () {
                return e._processThumbnailQueue()
              }
            }(this), 0)
          }, t.prototype._processThumbnailQueue = function () {
            if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function (e) {
              return function () {
                return e._processingThumbnail = !1, e._processThumbnailQueue()
              }
            }(this))
          }, t.prototype.removeFile = function (e) {
            if (e.status === t.UPLOADING && this.cancelUpload(e), this.files = l(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
          }, t.prototype.removeAllFiles = function (e) {
            var i, n, r, o;
            for (null == e && (e = !1), o = this.files.slice(), n = 0, r = o.length; n < r; n++) i = o[n], (i.status !== t.UPLOADING || e) && this.removeFile(i);
            return null
          }, t.prototype.createThumbnail = function (e, t) {
            var i;
            return i = new FileReader, i.onload = function (n) {
              return function () {
                return "image/svg+xml" === e.type ? (n.emit("thumbnail", e, i.result), void(null != t && t())) : n.createThumbnailFromUrl(e, i.result, t)
              }
            }(this), i.readAsDataURL(e)
          }, t.prototype.createThumbnailFromUrl = function (e, t, i, n) {
            var r;
            return r = document.createElement("img"), n && (r.crossOrigin = n), r.onload = function (t) {
              return function () {
                var n, o, a, l, d, p, u, c;
                if (e.width = r.width, e.height = r.height, a = t.options.resize.call(t, e), null == a.trgWidth && (a.trgWidth = a.optWidth), null == a.trgHeight && (a.trgHeight = a.optHeight), n = document.createElement("canvas"), o = n.getContext("2d"), n.width = a.trgWidth, n.height = a.trgHeight, s(o, r, null != (d = a.srcX) ? d : 0, null != (p = a.srcY) ? p : 0, a.srcWidth, a.srcHeight, null != (u = a.trgX) ? u : 0, null != (c = a.trgY) ? c : 0, a.trgWidth, a.trgHeight), l = n.toDataURL("image/png"), t.emit("thumbnail", e, l), null != i) return i()
              }
            }(this), null != i && (r.onerror = i), r.src = t
          }, t.prototype.processQueue = function () {
            var e, t, i, n;
            if (t = this.options.parallelUploads, i = this.getUploadingFiles().length, e = i, !(i >= t) && (n = this.getQueuedFiles(), n.length > 0)) {
              if (this.options.uploadMultiple) return this.processFiles(n.slice(0, t - i));
              for (; e < t;) {
                if (!n.length) return;
                this.processFile(n.shift()), e++
              }
            }
          }, t.prototype.processFile = function (e) {
            return this.processFiles([e])
          }, t.prototype.processFiles = function (e) {
            var i, n, r;
            for (n = 0, r = e.length; n < r; n++) i = e[n], i.processing = !0, i.status = t.UPLOADING, this.emit("processing", i);
            return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
          }, t.prototype._getFilesWithXhr = function (e) {
            var t, i;
            return i = function () {
              var i, n, r, o;
              for (r = this.files, o = [], i = 0, n = r.length; i < n; i++) t = r[i], t.xhr === e && o.push(t);
              return o
            }.call(this)
          }, t.prototype.cancelUpload = function (e) {
            var i, n, r, o, s, a, l;
            if (e.status === t.UPLOADING) {
              for (n = this._getFilesWithXhr(e.xhr), r = 0, s = n.length; r < s; r++) i = n[r], i.status = t.CANCELED;
              for (e.xhr.abort(), o = 0, a = n.length; o < a; o++) i = n[o], this.emit("canceled", i);
              this.options.uploadMultiple && this.emit("canceledmultiple", n)
            } else(l = e.status) !== t.ADDED && l !== t.QUEUED || (e.status = t.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
            if (this.options.autoProcessQueue) return this.processQueue()
          }, r = function () {
            var e, t;
            return t = arguments[0], e = 2 <= arguments.length ? d.call(arguments, 1) : [], "function" == typeof t ? t.apply(this, e) : t
          }, t.prototype.uploadFile = function (e) {
            return this.uploadFiles([e])
          }, t.prototype.uploadFiles = function (e) {
            var i, o, s, a, l, d, p, u, c, h, f, m, g, v, z, b, y, w, F, x, k, E, C, L, A, T, S, D, M, _, N, I, U, R;
            for (F = new XMLHttpRequest, x = 0, L = e.length; x < L; x++) {
              i = e[x]
              i.xhr = F
              this.options.url = i.uploadUrl // アップロードURLを写真ごとに更新する
            }
            m = r(this.options.method, e), y = r(this.options.url, e), F.open(m, y, !0), F.withCredentials = !!this.options.withCredentials, z = null, s = function (t) {
              return function () {
                var n, r, o;
                for (o = [], n = 0, r = e.length; n < r; n++) i = e[n], o.push(t._errorProcessing(e, z || t.options.dictResponseError.replace("{{statusCode}}", F.status), F));
                return o
              }
            }(this), b = function (t) {
              return function (n) {
                var r, o, s, a, l, d, p, u, c;
                if (null != n)
                  for (o = 100 * n.loaded / n.total, s = 0, d = e.length; s < d; s++) i = e[s], i.upload = {
                    progress: o,
                    total: n.total,
                    bytesSent: n.loaded
                  };
                else {
                  for (r = !0, o = 100, a = 0, p = e.length; a < p; a++) i = e[a], 100 === i.upload.progress && i.upload.bytesSent === i.upload.total || (r = !1), i.upload.progress = o, i.upload.bytesSent = i.upload.total;
                  if (r) return
                }
                for (c = [], l = 0, u = e.length; l < u; l++) i = e[l], c.push(t.emit("uploadprogress", i, o, i.upload.bytesSent));
                return c
              }
            }(this), F.onload = function (i) {
              return function (n) {
                var r;
                if (e[0].status !== t.CANCELED && 4 === F.readyState) {
                  if (z = F.responseText, F.getResponseHeader("content-type") && ~F.getResponseHeader("content-type").indexOf("application/json")) try {
                    z = JSON.parse(z)
                  } catch (o) {
                    n = o, z = "Invalid JSON response from server."
                  }
                  return b(), 200 <= (r = F.status) && r < 300 ? i._finished(e, z, n) : s()
                }
              }
            }(this), F.onerror = function (i) {
              return function () {
                if (e[0].status !== t.CANCELED) return s()
              }
            }(this), v = null != (M = F.upload) ? M : F, v.onprogress = b, d = {
              Accept: "application/json",
              "Cache-Control": "no-cache",
              "X-Requested-With": "XMLHttpRequest"
            }, this.options.headers && n(d, this.options.headers);
            for (a in d) l = d[a], l && F.setRequestHeader(a, l);
            if (o = new FormData, this.options.params) {
              _ = this.options.params;
              for (f in _) w = _[f], o.append(f, w)
            }
            for (k = 0, A = e.length; k < A; k++) i = e[k], this.emit("sending", i, F, o);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", e, F, o), "FORM" === this.element.tagName)
              for (N = this.element.querySelectorAll("input, textarea, select, button"), E = 0, T = N.length; E < T; E++)
                if (u = N[E], c = u.getAttribute("name"), h = u.getAttribute("type"), "SELECT" === u.tagName && u.hasAttribute("multiple"))
                  for (I = u.options, C = 0, S = I.length; C < S; C++) g = I[C], g.selected && o.append(c, g.value);
                else(!h || "checkbox" !== (U = h.toLowerCase()) && "radio" !== U || u.checked) && o.append(c, u.value);
            for (p = D = 0, R = e.length - 1; 0 <= R ? D <= R : D >= R; p = 0 <= R ? ++D : --D) o.append(this._getParamName(p), e[p], this._renameFilename(e[p].name));

            /*
             tにはFormDataクラスが入っている.
             今回、s3へ写真を直接アップロードするため、 写真単体を送信するように修正
            */
            // return this.submitRequest(F, o, e)
            return this.submitRequestForS3(F, e[0])
          }, t.prototype.submitRequest = function (e, t, i) {
            return e.send(t)
        }, t.prototype.submitRequestForS3 = function (e, file) {
            return e.send(file)
          }, t.prototype._finished = function (e, i, n) {
            var r, o, s;
            for (o = 0, s = e.length; o < s; o++) r = e[o], r.status = t.SUCCESS, this.emit("success", r, i, n), this.emit("complete", r);
            if (this.options.uploadMultiple && (this.emit("successmultiple", e, i, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
          }, t.prototype._errorProcessing = function (e, i, n) {
            var r, o, s;
            for (o = 0, s = e.length; o < s; o++) r = e[o], r.status = t.ERROR, this.emit("error", r, i, n), this.emit("complete", r);
            if (this.options.uploadMultiple && (this.emit("errormultiple", e, i, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
          }, t
        }(i), t.version = "4.3.0", t.options = {}, t.optionsForElement = function (e) {
          return e.getAttribute("id") ? t.options[n(e.getAttribute("id"))] : void 0
        }, t.instances = [], t.forElement = function (e) {
          if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
          return e.dropzone
        }, t.autoDiscover = !0, t.discover = function () {
          var e, i, n, r, o, s;
          for (document.querySelectorAll ? n = document.querySelectorAll(".dropzone") : (n = [], e = function (e) {
              var t, i, r, o;
              for (o = [], i = 0, r = e.length; i < r; i++) t = e[i], /(^| )dropzone($| )/.test(t.className) ? o.push(n.push(t)) : o.push(void 0);
              return o
            }, e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))), s = [], r = 0, o = n.length; r < o; r++) i = n[r], t.optionsForElement(i) !== !1 ? s.push(new t(i)) : s.push(void 0);
          return s
        }, t.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], t.isBrowserSupported = function () {
          var e, i, n, r, o;
          if (e = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
            if ("classList" in document.createElement("a"))
              for (o = t.blacklistedBrowsers, n = 0, r = o.length; n < r; n++) i = o[n], i.test(navigator.userAgent) && (e = !1);
            else e = !1;
          else e = !1;
          return e
        }, l = function (e, t) {
          var i, n, r, o;
          for (o = [], n = 0, r = e.length; n < r; n++) i = e[n], i !== t && o.push(i);
          return o
        }, n = function (e) {
          return e.replace(/[\-_](\w)/g, function (e) {
            return e.charAt(1).toUpperCase()
          })
        }, t.createElement = function (e) {
          var t;
          return t = document.createElement("div"), t.innerHTML = e, t.childNodes[0]
        }, t.elementInside = function (e, t) {
          if (e === t) return !0;
          for (; e = e.parentNode;)
            if (e === t) return !0;
          return !1
        }, t.getElement = function (e, t) {
          var i;
          if ("string" == typeof e ? i = document.querySelector(e) : null != e.nodeType && (i = e), null == i) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
          return i
        }, t.getElements = function (e, t) {
          var i, n, r, o, s, a, l, d;
          if (e instanceof Array) {
            r = [];
            try {
              for (o = 0, a = e.length; o < a; o++) n = e[o], r.push(this.getElement(n, t))
            } catch (p) {
              i = p, r = null
            }
          } else if ("string" == typeof e)
            for (r = [], d = document.querySelectorAll(e), s = 0, l = d.length; s < l; s++) n = d[s], r.push(n);
          else null != e.nodeType && (r = [e]);
          if (null == r || !r.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
          return r
        }, t.confirm = function (e, t, i) {
          return window.confirm(e) ? t() : null != i ? i() : void 0
        }, t.isValidFile = function (e, t) {
          var i, n, r, o, s;
          if (!t) return !0;
          for (t = t.split(","), n = e.type, i = n.replace(/\/.*$/, ""), o = 0, s = t.length; o < s; o++)
            if (r = t[o], r = r.trim(), "." === r.charAt(0)) {
              if (e.name.toLowerCase().indexOf(r.toLowerCase(), e.name.length - r.length) !== -1) return !0
            } else if (/\/\*$/.test(r)) {
            if (i === r.replace(/\/.*$/, "")) return !0
          } else if (n === r) return !0;
          return !1
        }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
          return this.each(function () {
            return new t(this, e)
          })
        }), "undefined" != typeof e && null !== e ? e.exports = t : window.Dropzone = t, t.ADDED = "added", t.QUEUED = "queued", t.ACCEPTED = t.QUEUED, t.UPLOADING = "uploading", t.PROCESSING = t.UPLOADING, t.CANCELED = "canceled", t.ERROR = "error", t.SUCCESS = "success", o = function (e) {
          var t, i, n, r, o, s, a, l, d, p;
          for (a = e.naturalWidth, s = e.naturalHeight, i = document.createElement("canvas"), i.width = 1, i.height = s, n = i.getContext("2d"), n.drawImage(e, 0, 0), r = n.getImageData(0, 0, 1, s).data, p = 0, o = s, l = s; l > p;) t = r[4 * (l - 1) + 3], 0 === t ? o = l : p = l, l = o + p >> 1;
          return d = l / s, 0 === d ? 1 : d
        }, s = function (e, t, i, n, r, s, a, l, d, p) {
          var u;
          return u = o(t), e.drawImage(t, i, n, r, s, a, l, d, p / u)
        }, r = function (e, t) {
          var i, n, r, o, s, a, l, d, p;
          if (r = !1, p = !0, n = e.document, d = n.documentElement, i = n.addEventListener ? "addEventListener" : "attachEvent", l = n.addEventListener ? "removeEventListener" : "detachEvent", a = n.addEventListener ? "" : "on", o = function (i) {
              if ("readystatechange" !== i.type || "complete" === n.readyState) return ("load" === i.type ? e : n)[l](a + i.type, o, !1), !r && (r = !0) ? t.call(e, i.type || i) : void 0
            }, s = function () {
              var e;
              try {
                d.doScroll("left")
              } catch (t) {
                return e = t, void setTimeout(s, 50)
              }
              return o("poll")
            }, "complete" !== n.readyState) {
            if (n.createEventObject && d.doScroll) {
              try {
                p = !e.frameElement
              } catch (u) {}
              p && s()
            }
            return n[i](a + "DOMContentLoaded", o, !1), n[i](a + "readystatechange", o, !1), e[i](a + "load", o, !1)
          }
        }, t._autoDiscoverFunction = function () {
          if (t.autoDiscover) return t.discover()
        }, r(window, t._autoDiscoverFunction)
      }).call(this)
    }).call(t, i(9)(e))
  }, function (e, t) {
    e.exports = " <form :action=url class=dropzone :id=id></form> "
  }, function (e, t, i) {
    function n(e, t) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i],
          r = u[n.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
          for (; o < n.parts.length; o++) r.parts.push(l(n.parts[o], t))
        } else {
          for (var s = [], o = 0; o < n.parts.length; o++) s.push(l(n.parts[o], t));
          u[n.id] = {
            id: n.id,
            refs: 1,
            parts: s
          }
        }
      }
    }

    function r(e) {
      for (var t = [], i = {}, n = 0; n < e.length; n++) {
        var r = e[n],
          o = r[0],
          s = r[1],
          a = r[2],
          l = r[3],
          d = {
            css: s,
            media: a,
            sourceMap: l
          };
        i[o] ? i[o].parts.push(d) : t.push(i[o] = {
          id: o,
          parts: [d]
        })
      }
      return t
    }

    function o(e, t) {
      var i = f(),
        n = v[v.length - 1];
      if ("top" === e.insertAt) n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), v.push(t);
      else {
        if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        i.appendChild(t)
      }
    }

    function s(e) {
      e.parentNode.removeChild(e);
      var t = v.indexOf(e);
      t >= 0 && v.splice(t, 1)
    }

    function a(e) {
      var t = document.createElement("style");
      return t.type = "text/css", o(e, t), t
    }

    function l(e, t) {
      var i, n, r;
      if (t.singleton) {
        var o = g++;
        i = m || (m = a(t)), n = d.bind(null, i, o, !1), r = d.bind(null, i, o, !0)
      } else i = a(t), n = p.bind(null, i), r = function () {
        s(i)
      };
      return n(e),
        function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            n(e = t)
          } else r()
        }
    }

    function d(e, t, i, n) {
      var r = i ? "" : n.css;
      if (e.styleSheet) e.styleSheet.cssText = z(t, r);
      else {
        var o = document.createTextNode(r),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
      }
    }

    function p(e, t) {
      var i = t.css,
        n = t.media,
        r = t.sourceMap;
      if (n && e.setAttribute("media", n), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = i;
      else {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(i))
      }
    }
    var u = {},
      c = function (e) {
        var t;
        return function () {
          return "undefined" == typeof t && (t = e.apply(this, arguments)), t
        }
      },
      h = c(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
      }),
      f = c(function () {
        return document.head || document.getElementsByTagName("head")[0]
      }),
      m = null,
      g = 0,
      v = [];
    e.exports = function (e, t) {
      t = t || {}, "undefined" == typeof t.singleton && (t.singleton = h()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
      var i = r(e);
      return n(i, t),
        function (e) {
          for (var o = [], s = 0; s < i.length; s++) {
            var a = i[s],
              l = u[a.id];
            l.refs--, o.push(l)
          }
          if (e) {
            var d = r(e);
            n(d, t)
          }
          for (var s = 0; s < o.length; s++) {
            var l = o[s];
            if (0 === l.refs) {
              for (var p = 0; p < l.parts.length; p++) l.parts[p]();
              delete u[l.id]
            }
          }
        }
    };
    var z = function () {
      var e = [];
      return function (t, i) {
        return e[t] = i, e.filter(Boolean).join("\n")
      }
    }()
  }, function (e, t, i) {
    var n = i(4);
    "string" == typeof n && (n = [
      [e.id, n, ""]
    ]);
    i(7)(n, {});
    n.locals && (e.exports = n.locals)
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
  }])
});

