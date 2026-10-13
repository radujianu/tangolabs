// Load local images by basename so that files with or without extensions work.
// No tracking, dependencies, or remote requests. Remove this script if all filenames are standardised.
(() => {
  const variants = [".jpg", ".jpeg", ".png", ".webp", "", ".avif", ".JPG", ".JPEG", ".PNG"];
  function resolveAsset(el, name, root, apply) {
    let i = 0;
    function next() {
      if (i >= variants.length) return;
      const candidate = root + name + variants[i++];
      const probe = new Image();
      probe.onload = () => apply(candidate);
      probe.onerror = next;
      probe.src = candidate;
    }
    next();
  }
  document.querySelectorAll('[data-asset]').forEach(img => {
    resolveAsset(img, img.dataset.asset, img.dataset.assetRoot || 'assets/', src => {
      img.src = src;
    });
  });
  document.querySelectorAll('[data-asset-bg]').forEach(el => {
    resolveAsset(el, el.dataset.assetBg, el.dataset.assetRoot || 'assets/', src => {
      el.style.backgroundImage = `linear-gradient(100deg, rgba(18,14,20,.35), rgba(31,16,26,.08)), url("${src}")`;
    });
  });
})();
