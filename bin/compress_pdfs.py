#!/usr/bin/env python3
"""Shrink the case-study PDFs after rendering: downsample images to ~200 dpi and re-encode as JPEG.
Usage: python3 bin/compress_pdfs.py   (requires PyMuPDF >= 1.24)"""
import glob, os, pymupdf
for f in sorted(glob.glob(os.path.join(os.path.dirname(__file__), '..', 'assets', 'pdf', 'case_studies', '*.pdf'))):
    before = os.path.getsize(f)
    doc = pymupdf.open(f)
    doc.rewrite_images(dpi_threshold=230, dpi_target=200, quality=82, lossy=True, lossless=True, bitonal=False, color=True, gray=True)
    doc.set_metadata({'author': 'Edward Profio', 'title': os.path.basename(f)[:-4].replace('_', ' ').replace('Edward Profio ', ''), 'creator': '', 'producer': ''})
    tmp = f + '.tmp'
    doc.save(tmp, garbage=4, deflate=True)
    doc.close()
    os.replace(tmp, f)
    print(os.path.basename(f), before // 1024, '->', os.path.getsize(f) // 1024, 'KB')
