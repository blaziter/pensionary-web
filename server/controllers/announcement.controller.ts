import { Request, Response } from "express";
import { options } from "../db.connector";
import Firebird from 'node-firebird';
import bufferParser from "../middleware/bufferParser.middleware";
import { v4 as uuidv4 } from 'uuid';
import { Announcement } from "../models/announcement.model";

export const getAllAnnouncements = (req: Request, res: Response) => {
    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM announcements', [], (err, result) => {
            if (result) result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}

export const createAnnouncement = (req: Request, res: Response) => {
    let announcement = req.body as Announcement;
    announcement.announcementId = uuidv4();

    if (announcement.ANNOUNCEMENT.length > 255) {
        return res.status(400).send('Announcement text is too long!')
    }

    Firebird.attach(options, (err, db) => {
        if (err) throw err;

        db.query('INSERT INTO ANNOUNCEMENTS (ANNOUNCEMENTID, TITLE, ANNOUNCEMENT) VALUES (?, ?, ?);', [announcement.announcementId, announcement.TITLE, announcement.ANNOUNCEMENT], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(400).send('Something went wrong');
            }

            res.status(200).send('Announcement created successfully');
            db.detach();
        });
    });
}

export const editAnnouncement = (req: Request, res: Response) => {
    const data = req.body;
    const { announcementId } = req.params;
    let announcement;

    if (!data) return res.status(400).send('Missing data');

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM announcements WHERE announcementId = ?', [announcementId], (err, result) => {
            if (err) return res.status(400).send('Unknown announcement');

            announcement = bufferParser(result);

            //This is definetly woodoo, need to fix, dont know how :(
            if (data.title) announcement[0].TITLE = data.title;
            if (data.announcement) announcement[0].ANNOUNCEMENT = data?.announcement;
            
            db.query('UPDATE ANNOUNCEMENTS set title = ?, announcement = ? WHERE announcementId = ?', [announcement[0].TITLE, announcement[0].ANNOUNCEMENT, announcementId], (err: string) => {
                if (err) {
                    console.log(err);
                    db.detach();
                    return res.status(400).send('Update failed');
                }
                db.detach();
                return res.status(200).send('Edit was successfull')
            })
        });
    });
}

export const deleteAnnouncement = (req: Request, res: Response) => {
    let { announcementId } = req.params;

    if (!announcementId) {
        return res.status(400).send('Missing announcement uuid');
    }

    console.log(announcementId);

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('DELETE FROM announcements WHERE ANNOUNCEMENTID = ?', [announcementId], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(400).send('Something went wrong');
            }

            res.status(200).send('Announcement deleted successfully');
            db.detach();
        });
    });
}